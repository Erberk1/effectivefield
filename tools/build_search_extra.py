#!/usr/bin/env python3
"""Refresh searchable text that Hugo's .Content cannot see.

Run from any directory: python3 tools/build_search_extra.py
Requires Poppler's pdftotext. PPTX/HTML extraction uses only Python's stdlib.
Use --refresh-publications to refresh the public INSPIRE feed; normal offline
runs preserve its existing snapshot. --publications-json accepts a saved feed.
Only public documents are read. Encrypted files, private shortcodes, and drafts
are excluded. Original files are never modified; presentation speaker notes
are not indexed. Scanned handwriting may have no machine-readable text.
"""

import argparse
import datetime as dt
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import urllib.request
import xml.etree.ElementTree as ET
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data/search_extra.json"
API = "https://inspirehep.net/api/literature?q=find+a+E.E.Erkul.1&sort=mostrecent&size=50"


def clean(text):
    text = html.unescape(text).replace("\x00", "")
    text = re.sub(r"\\(?:textit|textbf|textrm|emph|text)\{([^{}]*)\}", r"\1", text)
    text = re.sub(r"\\[()\[\]]", "", text)
    return re.sub(r"\s+", " ", text).strip()


class VisibleText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style", "svg", "head"):
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in ("script", "style", "svg", "head"):
            self.skip = max(0, self.skip - 1)

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def visible_text(source):
    parser = VisibleText()
    parser.feed(re.sub(r"{{.*?}}", " ", source, flags=re.S))
    return clean(" ".join(parser.parts))


def pptx_text(path):
    ns = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}
    parts = []
    with zipfile.ZipFile(path) as archive:
        slides = [name for name in archive.namelist()
                  if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)]
        for name in sorted(slides, key=lambda name: int(re.search(r"(\d+)\.xml", name)[1])):
            tree = ET.fromstring(archive.read(name))
            parts.extend(node.text or "" for node in tree.findall(".//a:t", ns))
    return clean(" ".join(parts))


def document_text(url):
    path = ROOT / "static" / url.lstrip("/")
    if path.suffix == ".pdf":
        result = subprocess.run(["pdftotext", "-enc", "UTF-8", str(path), "-"],
                                capture_output=True, text=True, check=True)
        return clean(result.stdout)
    if path.suffix == ".pptx":
        return pptx_text(path)
    raise ValueError(f"Not a public document: {url}")


def date_fields(value):
    if not value:
        return {"date": "", "dateLabel": "", "timestamp": 0}
    # INSPIRE occasionally supplies only a year or month.
    pieces = str(value).split("-")
    date = dt.datetime(int(pieces[0]), int(pieces[1]) if len(pieces) > 1 else 1,
                       int(pieces[2]) if len(pieces) > 2 else 1, tzinfo=dt.timezone.utc)
    label = date.strftime("%B %-d, %Y") if len(pieces) == 3 else str(value)
    return {"date": date.strftime("%Y-%m-%d"), "dateLabel": label,
            "timestamp": int(date.timestamp())}


def publication_entries(payload):
    entries = []
    for hit in payload.get("hits", {}).get("hits", []):
        m = hit.get("metadata", {})
        title = m.get("titles", [{}])[0].get("title", "Untitled")
        abstracts = [visible_text(item.get("value", "")) for item in m.get("abstracts", [])]
        authors = [item.get("full_name", "") for item in m.get("authors", [])]
        journal = [" ".join(str(item.get(key, "")) for key in
                   ("journal_title", "journal_volume", "artid", "year"))
                   for item in m.get("publication_info", [])]
        identifiers = [item.get("value", "") for key in ("arxiv_eprints", "dois")
                       for item in m.get(key, [])]
        cn = str(m.get("control_number", hit["id"]))
        entries.append({
            "title": title, "summary": clean(abstracts[0] if abstracts else title),
            "content": clean(" ".join([title, *authors, *abstracts, *journal, *identifiers])),
            "url": f"/publications/#publication-{cn}", "section": "publications",
            "category": "publications", "tags": ["Publication", "Research"],
            "readingTime": 0, "source": f"https://inspirehep.net/literature/{cn}",
            **date_fields(m.get("preprint_date") or m.get("legacy_creation_date")),
        })
    return entries


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--refresh-publications", action="store_true")
    parser.add_argument("--publications-json", type=Path)
    args = parser.parse_args()
    previous = json.loads(OUTPUT.read_text()) if OUTPUT.exists() else {}
    supplemental = {}
    documents = []
    for post in sorted((ROOT / "content/posts").glob("*.md")):
        source = post.read_text()
        if (re.search(r"(?m)^(draft|searchHidden|robotsNoIndex):\s*true\s*$", source)
                or re.search(r"{{[<%]\s*(securefiles|protected)\b", source)
                or post.stem.endswith("-draft")):
            continue
        url = f"/posts/{post.stem}/"
        title = re.search(r'(?m)^title:\s*["\']?(.*?)["\']?$', source)[1]
        files = re.findall(r'url="(/(?:pdfs|pptx)/[^"\s]+\.(?:pdf|pptx))"', source)
        # Public PPTX version of the poster linked as a PDF on this entry.
        if post.stem == "holographic-spectral-alignment":
            files.append("/pptx/HSA_poster_final_final.pptx")
        if not files:
            continue
        parts = []
        for file_url in dict.fromkeys(files):
            text = document_text(file_url)
            # A filename still makes an image-only document discoverable.
            label = Path(file_url).stem.replace("_", " ").replace("-", " ")
            parts.extend([label, text])
            documents.append({"url": file_url, "page": url, "textCharacters": len(text)})
            if len(text) < 50:
                print(f"Limited text (likely scanned): {file_url}")
        supplemental[url] = clean(" ".join([title, *parts]))

    for name in ("presentations", "simulations"):
        supplemental[f"/{name}/"] = visible_text((ROOT / f"layouts/{name}.html").read_text())

    simulation = (ROOT / "static/desitter.html").read_text()
    panels = re.findall(r"html:\s*`(.*?)`", simulation, flags=re.S)
    title = html.unescape(re.search(r"<title>(.*?)</title>", simulation)[1])
    entries = [{
        "title": title,
        "summary": "Interactive 5D embedding: explore the geometry of de Sitter spacetime with real-time controls.",
        "content": clean(" ".join([visible_text(simulation), *map(visible_text, panels)])),
        "url": "/desitter.html", "section": "simulations", "category": "simulations",
        "tags": ["Simulation", "General Relativity", "Cosmology"], "readingTime": 0,
        **date_fields(""),
    }]
    if args.publications_json:
        publications = publication_entries(json.loads(args.publications_json.read_text()))
    elif args.refresh_publications:
        with urllib.request.urlopen(API, timeout=30) as response:
            publications = publication_entries(json.load(response))
    else:
        publications = [entry for entry in previous.get("entries", [])
                        if entry.get("section") == "publications"]
    for publication in publications:
        for key in ("title", "summary", "content"):
            publication[key] = clean(publication[key])
    entries.extend(publications)
    result = {
        "supplementalText": [{"url": url, "content": text} for url, text in sorted(supplemental.items())],
        "entries": entries,
        "documents": documents,
        "publicationsSource": API,
    }
    OUTPUT.parent.mkdir(exist_ok=True)
    OUTPUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    print(f"Indexed {len(documents)} public documents, {len(publications)} publications, and de Sitter simulation.")


if __name__ == "__main__":
    main()

# Site search

Search controls appear on the home page, Posts archive, and `/search/`. The navigation links to Search from every standard page. The site searches titles, page text, tags, public presentation text, publication metadata/abstracts, and simulation descriptions. Matching is case- and accent-insensitive; multiple words must all appear in an entry. Results default to newest first.

Hugo builds `index.json` from public pages and `data/search_extra.json`. Private encrypted document contents, actual draft pages, and no-index utility pages are excluded. Text in image-only scans is not OCRed.

After adding or changing a public PDF, PPTX, or the simulation, run:

```sh
python3 tools/build_search_extra.py
```

This uses Poppler's `pdftotext` and Python's standard library, and does not modify originals. Refresh the publication snapshot from the same public INSPIRE feed used by the Publications page with:

```sh
python3 tools/build_search_extra.py --refresh-publications
```

Commit the regenerated data with the content change. Ordinary Hugo/Netlify builds use that checked-in data, so search remains available if INSPIRE is temporarily unavailable.

Check a body-only word, a slide-only word, publication and simulation results, both sort directions across all posts, no matches, clearing, and mobile/light/dark layout before publishing changes to search.

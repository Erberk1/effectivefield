(() => {
  const panel = document.querySelector('.field-discovery');
  if (!panel) return;
  const input = panel.querySelector('#field-query');
  const order = panel.querySelector('#field-order');
  const clear = panel.querySelector('.discovery-clear');
  const status = panel.querySelector('.discovery-status');
  const results = document.getElementById('discovery-results');
  const original = document.getElementById('discovery-default');
  const searchPage = panel.dataset.searchPage === 'true';
  const params = new URLSearchParams(location.search);
  input.value = (params.get('q') || '').slice(0, 150);
  order.value = params.get('order') === 'oldest' ? 'oldest' : 'newest';
  let browsingAll = order.value === 'oldest';
  let entries;
  let loading;
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const tokens = () => [...new Set(normalize(input.value.trim()).split(/\s+/).filter(Boolean))];

  function highlighted(text, words) {
    const fragment = document.createDocumentFragment();
    if (!words.length) { fragment.append(text); return fragment; }
    const normalized = normalize(text);
    let cursor = 0;
    while (cursor < text.length) {
      let start = -1, length = 0;
      for (const word of words) {
        const at = normalized.indexOf(word, cursor);
        if (at >= 0 && (start < 0 || at < start || (at === start && word.length > length))) {
          start = at; length = word.length;
        }
      }
      if (start < 0) { fragment.append(text.slice(cursor)); break; }
      fragment.append(text.slice(cursor, start));
      const mark = document.createElement('mark');
      mark.textContent = text.slice(start, start + length);
      fragment.append(mark);
      cursor = start + length;
    }
    return fragment;
  }

  function excerpt(entry, words) {
    const source = entry.content;
    const normalized = normalize(source);
    const positions = words.map(word => normalized.indexOf(word)).filter(at => at >= 0);
    if (!positions.length) return entry.summary.slice(0, 260) + (entry.summary.length > 260 ? '…' : '');
    let start = Math.max(0, Math.min(...positions) - 70);
    if (start) {
      const space = source.indexOf(' ', start);
      if (space !== -1 && space < start + 30) start = space + 1;
    }
    const end = Math.min(source.length, start + 270);
    return (start ? '…' : '') + source.slice(start, end).trim() + (end < source.length ? '…' : '');
  }

  function card(entry, words) {
    const article = document.createElement('article');
    article.className = 'post-entry';
    const header = document.createElement('header');
    header.className = 'entry-header';
    const title = document.createElement('h2');
    const link = document.createElement('a');
    link.href = entry.url;
    link.append(highlighted(entry.title, words));
    title.append(link); header.append(title); article.append(header);
    const summary = document.createElement('div');
    summary.className = 'entry-content';
    const paragraph = document.createElement('p');
    paragraph.append(highlighted(excerpt(entry, words), words));
    summary.append(paragraph); article.append(summary);
    const footer = document.createElement('footer');
    footer.className = 'entry-footer';
    if (entry.section === 'posts') {
      const time = document.createElement('time');
      time.dateTime = entry.date; time.textContent = entry.dateLabel;
      footer.append(time, ` · ${entry.category || 'Post'} · ${entry.readingTime} min`);
    } else { footer.textContent = entry.category ? entry.category[0].toUpperCase() + entry.category.slice(1) : 'Page'; }
    article.append(footer);
    return article;
  }

  function render() {
    clear.hidden = !input.value;
    if (!entries) return;
    const words = tokens();
    const active = words.length > 0 || browsingAll;
    if (original) original.hidden = active;
    results.hidden = !active;
    if (!active) {
      results.replaceChildren();
      status.textContent = searchPage ? 'Type a word to search posts, presentations and pages.' : `${entries.filter(e => e.section === 'posts').length} posts · newest first. Search the whole site above.`;
      return;
    }
    const matches = entries.filter(entry => words.length ? words.every(word => entry.searchText.includes(word)) : entry.section === 'posts');
    matches.sort((a, b) => (order.value === 'oldest' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp) || a.title.localeCompare(b.title));
    results.replaceChildren(...matches.map(entry => card(entry, words)));
    const noun = words.length ? 'result' : 'post';
    status.textContent = matches.length ? `${matches.length} ${noun}${matches.length === 1 ? '' : 's'}${words.length ? ` for “${input.value.trim()}”` : ''} · ${order.value} first` : `No matches for “${input.value.trim()}”. Try another word or fewer words.`;
  }

  function updateUrl() {
    const url = new URL(location.href);
    const query = input.value.trim();
    query ? url.searchParams.set('q', query) : url.searchParams.delete('q');
    order.value === 'oldest' ? url.searchParams.set('order', 'oldest') : url.searchParams.delete('order');
    history.replaceState(null, '', url);
  }

  function load() {
    if (entries) return Promise.resolve();
    if (loading) return loading;
    status.textContent = 'Loading search…';
    loading = fetch(panel.dataset.index).then(response => {
      if (!response.ok) throw new Error('Search index unavailable');
      return response.json();
    }).then(data => {
      entries = data.map(entry => ({...entry, searchText: normalize([entry.title, entry.content, entry.summary, entry.category, ...entry.tags].join(' '))}));
      render();
    }).catch(() => {
      status.textContent = 'Search is unavailable right now. Try typing again, or browse using the navigation above.';
      if (original) original.hidden = false;
      results.hidden = true;
    }).finally(() => { loading = null; });
    return loading;
  }

  input.addEventListener('input', () => { updateUrl(); render(); load(); });
  order.addEventListener('change', () => { browsingAll = true; updateUrl(); render(); load(); });
  clear.addEventListener('click', () => { input.value = ''; updateUrl(); render(); input.focus(); });
  panel.querySelector('form').addEventListener('submit', event => { event.preventDefault(); updateUrl(); render(); load(); });
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape' && input.value) { event.preventDefault(); clear.click(); }
  });
  load();
})();

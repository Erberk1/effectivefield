(() => {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  const updateLabel = () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    const state = dark ? 'Phonon, dark mode' : 'Photon, light mode';
    const action = dark ? 'Switch to light mode' : 'Switch to dark mode';
    button.setAttribute('aria-label', `${state}. ${action}`);
    button.title = `${state}. ${action} (Alt + T)`;
  };

  updateLabel();
  new MutationObserver(updateLabel).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
})();

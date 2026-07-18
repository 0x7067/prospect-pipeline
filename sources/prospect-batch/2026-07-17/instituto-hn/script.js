(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#menu-principal');
  if (!toggle || !nav) return;
  const label = toggle.querySelector('.menu-icon + span');
  const setMenuState = open => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (label) label.textContent = open ? 'Fechar' : 'Menu';
  };
  toggle.addEventListener('click', () => setMenuState(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuState(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenuState(false); toggle.focus(); }
  }, true);
})();

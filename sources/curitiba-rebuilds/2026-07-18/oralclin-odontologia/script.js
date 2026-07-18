(() => {
  'use strict';

  // Accessible mobile navigation disclosure. No tracking, no external calls.
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.dataset.open = String(!isOpen);
      toggle.innerHTML = isOpen
        ? 'Menu <span aria-hidden="true">+</span>'
        : 'Fechar <span aria-hidden="true">×</span>';
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.dataset.open = 'false';
        toggle.innerHTML = 'Menu <span aria-hidden="true">+</span>';
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.dataset.open === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.dataset.open = 'false';
        toggle.innerHTML = 'Menu <span aria-hidden="true">+</span>';
        toggle.focus();
      }
    });
  }
})();

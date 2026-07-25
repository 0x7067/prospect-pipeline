document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu');

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const nextOpen = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(nextOpen));
      menu.classList.toggle('open', nextOpen);
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
  }

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function activate(selected) {
    tabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      let next = null;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].focus();
    });
  });
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.dataset.open === 'true';
    nav.dataset.open = String(!isOpen);
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.innerHTML = isOpen ? 'Menu <span aria-hidden="true">+</span>' : 'Fechar <span aria-hidden="true">×</span>';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.dataset.open = 'false';
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.innerHTML = 'Menu <span aria-hidden="true">+</span>';
    });
  });
}

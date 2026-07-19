(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const isOpen = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
      menu.textContent = isOpen ? 'Menu' : 'Fechar';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); menu.textContent = 'Menu';
    }));
  }
  document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => {
    const feedback = button.parentElement.querySelector('.contact-feedback');
    feedback.textContent = 'Nenhum dado foi enviado. O canal segue pendente de confirmação.';
    button.setAttribute('aria-describedby', 'contact-status');
    feedback.id = 'contact-status';
  }));
})();

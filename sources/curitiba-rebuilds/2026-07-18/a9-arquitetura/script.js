(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      nav.dataset.open = String(!open);
      menu.textContent = open ? 'Menu' : 'Fechar';
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menu.setAttribute('aria-expanded', 'false');
        nav.dataset.open = 'false';
        menu.textContent = 'Menu';
      }
    });
  }

  const routes = {
    corporativo: {
      category: 'ARQUITETURA CORPORATIVA',
      title: 'Reforma de escritório — Agrotis',
      caption: 'Uma referência visual para pensar ambientes de trabalho com estratégia, funcionalidade e experiência.',
      image: 'assets/asset-1.jpg', alt: 'Sala de reunião com a marca Agrotis visível.'
    },
    comercial: {
      category: 'ARQUITETURA COMERCIAL',
      title: 'Reforma de loja em Curitiba',
      caption: 'Um interior comercial apresentado como prova de intenção, uso e comunicação visual.',
      image: 'assets/asset-2.jpg', alt: 'Interior comercial com balcão, mesas e comunicação visual.'
    },
    cenografica: {
      category: 'ARQUITETURA CENOGRÁFICA',
      title: 'Jardim Floratta — Grupo O Boticário',
      caption: 'Uma instalação visual em que estruturas curvas e elementos florais dão forma à experiência.',
      image: 'assets/asset-3.jpg', alt: 'Instalação Jardim de Floratta com estruturas curvas e elementos florais.'
    },
    residencial: {
      category: 'ARQUITETURA RESIDENCIAL',
      title: 'COI — Grupo O Boticário',
      caption: 'Uma referência espacial com mesas, vegetação e instalações aparentes.',
      image: 'assets/asset-4.jpg', alt: 'Ambiente interno com mesas, vegetação e instalações aparentes.'
    }
  };
  const tabs = [...document.querySelectorAll('.route-tab')];
  const image = document.querySelector('#proof-image');
  const panel = document.querySelector('#proof-panel');
  const category = document.querySelector('#proof-category');
  const title = document.querySelector('#proof-title');
  const caption = document.querySelector('#proof-caption');
  const status = document.querySelector('#route-status');
  if (!tabs.length || !image || !panel || !category || !title || !caption) return;

  const select = (tab, focus = false) => {
    const route = routes[tab.dataset.route];
    if (!route) return;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    category.textContent = route.category;
    title.textContent = route.title;
    caption.textContent = route.caption;
    image.classList.remove('is-error');
    image.src = route.image;
    image.alt = route.alt;
    if (status) status.textContent = `${route.category.toLowerCase()} selecionada.`;
    if (focus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (next !== index) { event.preventDefault(); select(tabs[next], true); }
      if (event.key === 'Home') { event.preventDefault(); select(tabs[0], true); }
      if (event.key === 'End') { event.preventDefault(); select(tabs[tabs.length - 1], true); }
    });
  });
  image.addEventListener('error', () => image.parentElement.classList.add('is-error'));
})();

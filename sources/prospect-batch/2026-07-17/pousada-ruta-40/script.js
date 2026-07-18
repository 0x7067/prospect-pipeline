document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initTestimonialsSlider();
  initBookingDates();
  initWhatsAppForm();
});

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-menu');
  if (!toggle || !nav) return;

  const setMenuState = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    setMenuState(!nav.classList.contains('open'));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setMenuState(false);
      toggle.focus();
    }
  });
}

function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('slider-dots');
  const btns = document.querySelectorAll('.slider-btn');
  if (!track || !dotsContainer) return;
  const items = track.querySelectorAll('.testimonial');
  let index = 0;
  const total = items.length;

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Ir para depoimento ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('.slider-dot');

  function goTo(i) {
    index = (i + total) % total;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    dots.forEach((d, j) => d.classList.toggle('active', j === index));
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = parseInt(btn.getAttribute('data-dir'), 10);
      goTo(index + dir);
    });
  });

  setInterval(() => goTo(index + 1), 6000);
}

function initBookingDates() {
  const inicio = document.getElementById('data-inicio');
  const fim = document.getElementById('data-fim');
  if (!inicio || !fim) return;
  const today = new Date().toISOString().split('T')[0];
  inicio.setAttribute('min', today);
  fim.setAttribute('min', today);
  inicio.addEventListener('change', () => {
    if (fim.value && fim.value < inicio.value) fim.value = inicio.value;
    fim.setAttribute('min', inicio.value);
  });
}

function initWhatsAppForm() {
  const form = document.querySelector('.booking-form');
  if (!form) return;
  const textInput = document.getElementById('whatsapp-text');
  if (!textInput) return;
  const fields = ['#nome','#data-inicio','#data-fim','#hospedes','#quarto','#observacao'];
  function updateText() {
    const nome = (document.querySelector('#nome').value || '').trim();
    const inicio = document.querySelector('#data-inicio').value || '';
    const fim = document.querySelector('#data-fim').value || '';
    const hospedes = document.querySelector('#hospedes').value || '';
    const quarto = document.querySelector('#quarto').value || '';
    const obs = (document.querySelector('#observacao').value || '').trim();
    const linhas = [
      'Olá! Gostaria de consultar a disponibilidade e as condições de hospedagem na Pousada Ruta 40.',
      '',
      '*Nome:* ' + nome,
      '*Check-in:* ' + inicio,
      '*Check-out:* ' + fim,
      '*Hóspedes:* ' + hospedes,
      '*Ambiente de interesse:* ' + quarto,
    ];
    if (obs) linhas.push('', '*Observação:* ' + obs);
    textInput.value = linhas.join('\n');
  }
  fields.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.addEventListener('input', updateText);
  });
  form.addEventListener('submit', updateText);
  updateText();
}

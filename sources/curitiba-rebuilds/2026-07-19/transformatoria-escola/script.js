document.documentElement.classList.add('js');

// Mobile navigation: announces open/closed state, closes on link choice or Escape.
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('open', !open);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}

// Staggered reveal-on-scroll. Content is visible by default (see styles.css);
// this only ADDS a transparent "pending" starting state to elements that are
// off-screen at load, so the effect enhances an already-visible page instead
// of gating visibility on a class the observer might never apply (paused
// tabs, headless renderers without a resize/paint tick, reduced motion).
const reveals = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!alreadyVisible) element.classList.add('pending');
  });

  const pending = document.querySelectorAll('.reveal.pending');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = Math.min(index % 4, 3) * 70;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });
  pending.forEach((element) => observer.observe(element));

  // Failsafe: force every pending element visible after a short delay
  // regardless of observer state, so content is never permanently gated.
  window.setTimeout(() => {
    pending.forEach((element) => element.classList.add('visible'));
  }, 2500);
}

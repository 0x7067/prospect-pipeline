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

// Staggered reveal-on-scroll. Content is opacity:1 by default in styles.css
// NO MATTER WHAT — this only adds a small transform offset to elements that
// are off-screen at load, then animates it to rest once each scrolls into
// view. Because opacity is never gated on JS/class/observer state, a fast
// programmatic scroll, a paused tab, or an observer that never fires still
// leaves every section fully visible; only the subtle motion is skipped.
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

  // Failsafe: settle every pending element's transform after a short delay
  // regardless of observer state. Belt-and-braces only — content was never
  // invisible even before this fires, since opacity is not part of .pending.
  window.setTimeout(() => {
    pending.forEach((element) => element.classList.add('visible'));
  }, 2500);
}

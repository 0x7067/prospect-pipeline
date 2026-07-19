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

// Reveal-on-scroll: opacity is never gated on JS/observer state (see
// styles.css .reveal) — only a small translateY offset is ever toggled here.
// A fast programmatic scroll, a paused tab, or an observer that never fires
// still leaves every section fully visible and legible; only the subtle
// motion is skipped.
const reveals = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion && reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((element) => observer.observe(element));

  // Failsafe: settle every element regardless of observer state. Belt-and-
  // braces only — content was never invisible even before this fires.
  window.setTimeout(() => {
    reveals.forEach((element) => element.classList.add('visible'));
  }, 2500);
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}

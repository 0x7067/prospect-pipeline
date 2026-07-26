document.documentElement.classList.add('js');

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
}

// Content reveal: a light entrance treatment that always finishes shortly
// after load, on a timer rather than scroll position. This keeps every
// section fully visible for static renders (screenshots, print, crawlers,
// reduced-motion users) instead of depending on the visitor scrolling each
// section into view before its copy and calls to action appear.
const reveals = document.querySelectorAll('.reveal');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  reveals.forEach((element) => element.classList.add('visible'));
} else {
  reveals.forEach((element, index) => {
    window.setTimeout(() => element.classList.add('visible'), 80 + index * 70);
  });
}

const yearEl = document.querySelector('#ano');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

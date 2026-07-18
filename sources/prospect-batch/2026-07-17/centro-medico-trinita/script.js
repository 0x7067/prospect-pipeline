(function () {
  "use strict";

  var toggle = document.getElementById("menuToggle");
  var closeBtn = document.getElementById("menuClose");
  var menu = document.getElementById("mobileMenu");
  var body = document.body;
  var lastFocused = null;

  if (!toggle || !menu) return;

  function focusableEls() {
    return menu.querySelectorAll('a[href], button:not([disabled])');
  }

  function openMenu() {
    lastFocused = document.activeElement;
    menu.classList.add("is-open");
    body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    var f = focusableEls();
    if (f.length) f[0].focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape" || e.key === "Esc") {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key === "Tab") {
      var f = Array.prototype.slice.call(focusableEls());
      if (!f.length) return;
      var first = f[0];
      var last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  var links = menu.querySelectorAll(".mobile-link");
  links.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close mobile menu automatically if viewport grows into desktop layout.
  var mq = window.matchMedia("(min-width: 980px)");
  function handleViewportChange(e) {
    if (e.matches && menu.classList.contains("is-open")) {
      closeMenu();
    }
  }
  if (mq.addEventListener) {
    mq.addEventListener("change", handleViewportChange);
  } else if (mq.addListener) {
    mq.addListener(handleViewportChange);
  }
})();

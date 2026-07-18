(function () {
  "use strict";

  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  var body = document.body;

  if (!menuToggle || !mainNav) return;

  var OPEN_LABEL = "Abrir menu";
  var CLOSE_LABEL = "Fechar menu";

  function isMobileMenu() {
    return window.matchMedia("(max-width: 720px)").matches;
  }

  function openMenu() {
    mainNav.setAttribute("data-open", "true");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", CLOSE_LABEL);
    body.style.overflow = "hidden";
  }

  function closeMenu(returnFocus) {
    mainNav.setAttribute("data-open", "false");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", OPEN_LABEL);
    body.style.overflow = "";
    closeAllSubmenus();
    if (returnFocus) {
      menuToggle.focus();
    }
  }

  function toggleMenu() {
    var expanded = menuToggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu(false);
    } else {
      openMenu();
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Close the mobile menu whenever a nav link is activated.
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (isMobileMenu()) {
        closeMenu(false);
      }
    });
  });

  // Escape closes the menu from anywhere inside it.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
      if (menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu(true);
      }
    }
  });

  // Collapse the drawer if the viewport grows back to desktop size.
  window.addEventListener("resize", function () {
    if (!isMobileMenu() && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu(false);
    }
  });

  // ---- Submenu (Sobre nós / Especialidades) accessible toggles ----
  var submenuToggles = document.querySelectorAll(".submenu-toggle");

  function closeAllSubmenus() {
    submenuToggles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
      var parent = btn.closest(".has-submenu");
      if (parent) parent.setAttribute("data-sub-open", "false");
    });
  }

  submenuToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!isMobileMenu()) return;
      var parent = btn.closest(".has-submenu");
      var expanded = btn.getAttribute("aria-expanded") === "true";

      closeAllSubmenus();

      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        if (parent) parent.setAttribute("data-sub-open", "true");
      }
    });
  });
})();

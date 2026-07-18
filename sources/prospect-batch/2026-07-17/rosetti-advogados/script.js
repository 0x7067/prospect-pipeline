/*
  Rosetti Advogados — site behavior.
  No analytics, no tracking, no forms, no network calls. Everything here is
  local UI state (mobile navigation) plus one cosmetic date fill.
*/
(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNavigation");
  var scrim = document.getElementById("navScrim");

  if (!toggle || !nav || !scrim) return;

  var navLinks = nav.querySelectorAll("a");

  function isDesktop() {
    return window.matchMedia("(min-width: 900px)").matches;
  }

  function openNav() {
    nav.classList.add("is-open");
    scrim.classList.add("is-open");
    scrim.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    document.body.style.overflow = "hidden";
  }

  function closeNav(returnFocus) {
    nav.classList.remove("is-open");
    scrim.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = "";
    window.setTimeout(function () {
      if (!nav.classList.contains("is-open")) {
        scrim.hidden = true;
      }
    }, 320);
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    if (open) {
      closeNav(false);
    } else {
      openNav();
    }
  });

  scrim.addEventListener("click", function () {
    closeNav(false);
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (!isDesktop()) closeNav(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeNav(true);
    }
  });

  window.addEventListener("resize", function () {
    if (isDesktop() && toggle.getAttribute("aria-expanded") === "true") {
      closeNav(false);
    }
  });

  // Keep the footer copyright year accurate without manual edits.
  var yearEl = document.getElementById("footerYear");
  if (yearEl) {
    var currentYear = new Date().getFullYear();
    if (currentYear >= 2026) {
      yearEl.textContent = String(currentYear);
    }
  }
})();

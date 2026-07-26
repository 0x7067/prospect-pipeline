(function () {
  "use strict";

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("menuToggle");
  var closeBtn = document.getElementById("menuClose");
  var menu = document.getElementById("mobileMenu");
  var body = document.body;
  var lastFocused = null;

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

  if (toggle && menu) {
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

    var mobileLinks = menu.querySelectorAll(".mobile-link");
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    var mq = window.matchMedia("(min-width: 960px)");
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
  }

  /* ---------- Specialty rail -> team filter ---------- */
  var rail = document.getElementById("specialtyRail");
  var teamGrid = document.getElementById("teamGrid");
  var teamStatus = document.getElementById("teamStatus");
  var emptyState = document.getElementById("teamEmptyState");
  var emptyAreaLabel = document.getElementById("teamEmptyArea");

  if (rail && teamGrid) {
    var buttons = Array.prototype.slice.call(rail.querySelectorAll(".specialty-item"));
    var cards = Array.prototype.slice.call(teamGrid.querySelectorAll(".team-card"));
    var defaultStatus = teamStatus ? teamStatus.textContent : "";
    var activeArea = null;

    function nameForArea(btn) {
      var nameEl = btn.querySelector(".name");
      return nameEl ? nameEl.textContent : "";
    }

    function applyFilter(area, label) {
      var matches = 0;
      cards.forEach(function (card) {
        var areas = (card.getAttribute("data-areas") || "").split(" ");
        var isMatch = !area || areas.indexOf(area) !== -1;
        card.hidden = !isMatch;
        if (isMatch) matches++;
      });

      if (area && matches === 0) {
        teamGrid.hidden = true;
        if (emptyState) {
          emptyState.hidden = false;
          if (emptyAreaLabel) emptyAreaLabel.textContent = label;
        }
        if (teamStatus) {
          teamStatus.textContent = label + ": nenhum especialista dedicado exibido publicamente no momento.";
        }
      } else {
        teamGrid.hidden = false;
        if (emptyState) emptyState.hidden = true;
        if (teamStatus) {
          teamStatus.textContent = area
            ? "Mostrando " + matches + " especialista" + (matches === 1 ? "" : "s") + " em " + label.toLowerCase() + "."
            : defaultStatus;
        }
      }
    }

    rail.addEventListener("click", function (e) {
      var btn = e.target.closest(".specialty-item");
      if (!btn) return;

      var area = btn.getAttribute("data-area");
      var isSame = activeArea === area;

      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });

      if (isSame) {
        activeArea = null;
        applyFilter(null, "");
      } else {
        activeArea = area;
        btn.setAttribute("aria-pressed", "true");
        applyFilter(area, nameForArea(btn));
      }
    });
  }

  /* ---------- Reveal-on-scroll (progressive enhancement only) ----------
     Below-the-fold sections must never be left permanently invisible —
     e.g. a tool that renders/captures the full page without scrolling
     (screenshot bots, print-to-PDF, some crawlers) would otherwise never
     trigger the IntersectionObserver and the section would stay at
     opacity:0 forever while still occupying its layout space, reading as
     a large blank gap. A generous rootMargin plus a hard timeout fallback
     guarantees every section becomes visible shortly after load either way. */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) document.documentElement.classList.add("js-reveal-ready");
  function revealAll() {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 600px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
    // Safety net: never leave content permanently invisible.
    window.setTimeout(revealAll, 900);
  } else {
    revealAll();
  }
})();

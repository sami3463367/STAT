/* ==========================================================================
   Department of Statistics — HSTU · site interactions
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Sticky header shadow ---------- */
  const header = document.querySelector(".site-header");
  const toTop = document.querySelector(".to-top");

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const overlay = document.querySelector(".nav-overlay");

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("open");
    overlay && overlay.classList.remove("show");
    toggle && toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      overlay && overlay.classList.toggle("show", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    overlay && overlay.addEventListener("click", closeNav);
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = Math.min((i % 4) * 80, 240) + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const dur = 1600;
          const start = performance.now();
          (function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
            if (p < 1) requestAnimationFrame(tick);
          })(start);
          cio.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- Duplicate ticker content for a seamless loop ---------- */
  document.querySelectorAll(".ticker-track, .band-track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- Contact form (demo handler) ---------- */
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const ok = form.querySelector(".form-ok");
      if (ok) ok.classList.add("show");
      form.reset();
      setTimeout(() => ok && ok.classList.remove("show"), 6000);
    });
  }

  /* ---------- Footer year ---------- */
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
})();

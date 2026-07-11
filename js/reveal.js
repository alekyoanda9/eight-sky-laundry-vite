// js/reveal.js — Scroll-triggered reveal animation via IntersectionObserver

export function initReveal() {
  const els = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => {
    // Stagger siblings in same parent
    const siblings = [...el.parentElement.querySelectorAll('.reveal')];
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = `${idx * 60}ms`;
    observer.observe(el);
  });
}

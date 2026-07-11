// js/nav.js — Navbar: scroll state + mobile toggle + smooth scroll

export function initNav() {
  const navWrap = document.querySelector('.nav-wrap');
  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  // Scrolled state
  const onScroll = () => navWrap?.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  toggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
  });

  // Close on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

export function initSmoothScroll() {
  const navWrap = document.querySelector('.nav-wrap');
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = navWrap?.offsetHeight ?? 64;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

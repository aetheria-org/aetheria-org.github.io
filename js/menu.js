document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menuOverlay = document.querySelector('.menu-overlay');
  if (!hamburger || !menuOverlay) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isOpen = false;
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => isOpen ? closeMenu() : openMenu());

  menuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });
});

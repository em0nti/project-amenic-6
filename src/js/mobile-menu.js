(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const closeMenuLnk = document.querySelector('.js-close-menu-link');
    const closeMenuLnk2 = document.querySelector('.js-close-menu-link-2');
    const closeMenuLnk3 = document.querySelector('.js-close-menu-link-3');
    const closeMenuLnk4 = document.querySelector('.js-close-menu-link-4');
  
    const toggleMenu = () => {
      const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    closeMenuLnk.addEventListener('click', toggleMenu);
    closeMenuLnk2.addEventListener('click', toggleMenu);
    closeMenuLnk3.addEventListener('click', toggleMenu);
    closeMenuLnk4.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();


export function currentPage() {
    const homeEl = document.querySelector('.header__menu-link.js-home');
    const catalogEl = document.querySelector('.header__menu-link.js-catalog');
    const libraryEl = document.querySelector('.header__menu-link.js-library');

    const mobHomeEl = document.querySelector('.mobile-modal-link.js-home');
    const mobCatalogEl = document.querySelector('.mobile-modal-link.js-catalog');
    const mobLibraryEl = document.querySelector('.mobile-modal-link.js-library');

    if (document.title === 'Home - Cinemania') {
      if (!homeEl.classList.contains('current')) {
        homeEl.classList.add('current');
        catalogEl.classList.contains('current') ? catalogEl.classList.remove('current') : '';
        libraryEl.classList.contains('current') ? libraryEl.classList.remove('current') : '';
      }
      if (!mobHomeEl.classList.contains('current')) {
        mobHomeEl.classList.add('current');
        mobCatalogEl.classList.contains('current') ? mobCatalogEl.classList.remove('current') : '';
        mobLibraryEl.classList.contains('current') ? mobLibraryEl.classList.remove('current') : '';
      }
      
    } else if (document.title === 'Catalog - Cinemania') {
      if (!catalogEl.classList.contains('current')) {
        catalogEl.classList.add('current');
        homeEl.classList.contains('current') ? homeEl.classList.remove('current') : '';
        libraryEl.classList.contains('current') ? libraryEl.classList.remove('current') : '';
      }
      if (!mobCatalogEl.classList.contains('current')) {
        mobCatalogEl.classList.add('current');
        mobHomeEl.classList.contains('current') ? mobHomeEl.classList.remove('current') : '';
        mobLibraryEl.classList.contains('current') ? mobLibraryEl.classList.remove('current') : '';
      }
    } else if (document.title === 'My Library - Cinemania') {
      if (!libraryEl.classList.contains('current')) {
        libraryEl.classList.add('current');
        catalogEl.classList.contains('current') ? catalogEl.classList.remove('current') : '';
        homeEl.classList.contains('current') ? homeEl.classList.remove('current') : '';
      }
      if (!mobLibraryEl.classList.contains('current')) {
        mobLibraryEl.classList.add('current');
        mobHomeEl.classList.contains('current') ? mobHomeEl.classList.remove('current') : '';
        mobCatalogEl.classList.contains('current') ? mobCatalogEl.classList.remove('current') : '';
      }
    }

}

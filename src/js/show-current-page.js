export function currentPage() {
  const homeEl = document.querySelector('.js-home');
  const catalogEl = document.querySelector('.js-catalog');
  const libraryEl = document.querySelector('.js-library');

  if (document.title === 'Home - Cinemania') {
    if (!homeEl.classList.contains('current')) {
      homeEl.classList.add('current');
      catalogEl.classList.contains('current') ? catalogEl.classList.remove('current') : '';
      libraryEl.classList.contains('current') ? libraryEl.classList.remove('current') : '';
    }
  } else if (document.title === 'Catalog - Cinemania') {
    if (!catalogEl.classList.contains('current')) {
      catalogEl.classList.add('current');
      homeEl.classList.contains('current') ? catalogEl.classList.remove('current') : '';
      libraryEl.classList.contains('current') ? libraryEl.classList.remove('current') : '';
    }
  } else {
    if (!libraryEl.classList.contains('current')) {
      libraryEl.classList.add('current');
      catalogEl.classList.contains('current') ? catalogEl.classList.remove('current') : '';
      homeEl.classList.contains('current') ? libraryEl.classList.remove('current') : '';
    }
  }
}

import { refs } from '../constants.js';
import { openModal } from './open-close-modals';
import { onWatchTrailerClick } from '../watch-trailer';

function initModals() {
  // add an event listener to open the modals
  //example
  //refs.watchTrailerBtn.addEventListener('click', () => openModal(refs.modalTrailer));
  // refs.popupBtn.addEventListener('click', () => openModal(refs.modalPopup));

  const currentPage = window.location.pathname;
  if (currentPage === '/library.html') {
    refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));
    return;
  }

  refs.watchTrailerBtn.addEventListener('click', () => onWatchTrailerClick(493529));
  refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));
}

export default initModals;

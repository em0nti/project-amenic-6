import { refs } from '../constants.js';
import { openModal, closeModal } from './open-close-modals';
import { onWatchTrailerClick } from '../watch-trailer';

function initModals() {
  // add an event listener to open the modals
  //example
  //refs.watchTrailerBtn.addEventListener('click', () => openModal(refs.modalTrailer));
  // refs.popupBtn.addEventListener('click', () => openModal(refs.modalPopup));

  refs.watchTrailerBtn.addEventListener('click', onWatchTrailerClick);
}

export default initModals;

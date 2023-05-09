import { refs } from '../constants.js';
import { openModal, closeModal } from './open-close-modals';
import { onWatchTrailerClick } from '../watch-trailer';

function initModals() {
  // add an event listener to open the modals
  //example
  //refs.watchTrailerBtn.addEventListener('click', () => openModal(refs.modalTrailer));
  // refs.popupBtn.addEventListener('click', () => openModal(refs.modalPopup));

  const currentPage = window.location.pathname;

  // Check if the event occurred on the homepage
  if ((currentPage === '/') || (currentPage === '/index.html')) {
    refs.watchTrailerBtn.addEventListener('click', () => onWatchTrailerClick(493529));
  }

  // Check if the event occurred on the about page
  if (currentPage === '/catalog.html') {
    refs.watchTrailerBtn.addEventListener('click', () => onWatchTrailerClick(493529));
  }

  // Check if the event occurred on the contact page
  if (currentPage === '/library.html') {
    refs.cards.addEventListener('click', openModal(refs.modalPopUp));
  }



}

export default initModals;

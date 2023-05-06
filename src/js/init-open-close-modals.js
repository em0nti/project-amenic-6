import { refs } from './constants.js';

function openModal(modal) {
  modal.classList.remove('backdrop--hidden');
  document.addEventListener('keydown', event => handleKeyDown(event, modal));
  modal.addEventListener('click', event => handleOverlayClick(event, modal));
  modal.querySelector('[data-modal-close]').addEventListener('click', () => closeModal(modal));
}

function closeModal(modal) {
  modal.classList.add('backdrop--hidden');
  document.removeEventListener('keydown', handleKeyDown);
  modal.removeEventListener('click', handleOverlayClick);
  modal.querySelector('[data-modal-close]').removeEventListener('click', () => closeModal(modal));
}

function handleKeyDown(event, modal) {
  if (event.key === 'Escape') {
    closeModal(modal);
  }
}

function handleOverlayClick(event, modal) {
  if (event.target === modal) {
    closeModal(modal);
  }
}

function initModals() {
  // add an event listener to open the modals
  //example
  // refs.watchTrailerBtn.addEventListener('click', () => openModal(refs.modalTrailer));
  // refs.popupBtn.addEventListener('click', () => openModal(refs.modalPopup));
}

export default initModals;

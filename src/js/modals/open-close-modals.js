import { refs } from '../constants.js';

export function openModal(modal) {
  modal.classList.remove('backdrop--hidden');
  document.addEventListener('keydown', event => handleKeyDown(event, modal));
  modal.addEventListener('click', event => handleOverlayClick(event, modal));
  modal.querySelector('[data-modal-close]').addEventListener('click', () => closeModal(modal));
  console.log(`Modal <${modal}> is open`);
}

export function closeModal(modal) {
  modal.classList.add('backdrop--hidden');
  document.removeEventListener('keydown', handleKeyDown);
  modal.removeEventListener('click', handleOverlayClick);
  modal.querySelector('[data-modal-close]').removeEventListener('click', () => closeModal(modal));
  console.log(`Modal <${modal}> is closed`);
  return true;
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

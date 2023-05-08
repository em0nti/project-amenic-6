import { refs } from '../constants.js';

export function openModal(modal, player = null) {
  modal.classList.remove('backdrop--hidden');
  if (player) {
    document.addEventListener('keydown', event => handleKeyDown(event, modal, player));
    modal.addEventListener('click', event => handleOverlayClick(event, modal, player));
    modal.querySelector('[data-modal-close]').addEventListener('click', () => closeModal(modal, player));
  }
  document.addEventListener('keydown', event => handleKeyDown(event, modal));
  modal.addEventListener('click', event => handleOverlayClick(event, modal));
  modal.querySelector('[data-modal-close]').addEventListener('click', () => closeModal(modal));
  console.log(`Modal <${modal}> is open. Player is ${player}`);
}

export function closeModal(modal, player = null) {
  modal.classList.add('backdrop--hidden');

  document.removeEventListener('keydown', handleKeyDown);
  modal.removeEventListener('click', handleOverlayClick);

  if (player) {
    modal.querySelector('[data-modal-close]').removeEventListener('click', () => closeModal(modal, player));
    player.stopVideo();
  } else {
    modal.querySelector('[data-modal-close]').removeEventListener('click', () => closeModal(modal));
  }
  console.log(`Modal <${modal}> is closed. Player is ${player}`);
}

function handleKeyDown(event, modal, player = null) {
  if (event.key === 'Escape') {
    closeModal(modal);
  }
  if (event.key === 'Escape' && player) {
    closeModal(modal, player);
  }
}

function handleOverlayClick(event, modal, player = null) {
  if (event.target === modal) {
    closeModal(modal);
  }
  if (event.target === modal && player) {
    closeModal(modal, player);
  }
}

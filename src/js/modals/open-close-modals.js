import { refs } from '../constants.js';
import { supportsPassiveEvents } from 'detect-it';

export function openModal(modal, player = null) {
  modal.classList.remove('backdrop--hidden');
  if (player) {
    document.addEventListener(
      'keydown',
      event => handleKeyDown(event, modal, player),
      supportsPassiveEvents ? { passive: true } : false,
    );
    modal.addEventListener(
      'click',
      event => handleOverlayClick(event, modal, player),
      supportsPassiveEvents ? { passive: true } : false,
    );
    modal
      .querySelector('[data-modal-close]')
      .addEventListener(
        'click',
        () => closeModal(modal, player),
        supportsPassiveEvents ? { passive: true } : false,
      );
  } else {
    document.addEventListener(
      'keydown',
      event => handleKeyDown(event, modal),
      supportsPassiveEvents ? { passive: true } : false,
    );
    modal.addEventListener(
      'click',
      event => handleOverlayClick(event, modal),
      supportsPassiveEvents ? { passive: true } : false,
    );
    modal
      .querySelector('[data-modal-close]')
      .addEventListener(
        'click',
        () => closeModal(modal),
        supportsPassiveEvents ? { passive: true } : false,
      );
  }
  console.log(`Modal <${modal}> is open. Player is ${player}`);
}

export function closeModal(modal, player = null) {
  modal.classList.add('backdrop--hidden');

  document.removeEventListener('keydown', handleKeyDown);
  modal.removeEventListener('click', handleOverlayClick);

  if (player) {
    modal
      .querySelector('[data-modal-close]')
      .removeEventListener('click', () => closeModal(modal, player));
    player.stopVideo();
  } else {
    modal.querySelector('[data-modal-close]').removeEventListener('click', () => closeModal(modal));
  }
  console.log(`Modal <${modal}> is closed. Player is ${player}`);
}

function handleKeyDown(event, modal, player = null) {
  if (event.key === 'Escape' && player) {
    closeModal(modal, player);
  } else {
    closeModal(modal);
  }
}

function handleOverlayClick(event, modal, player = null) {
  if (event.target === modal && player) {
    closeModal(modal, player);
  } else {
    closeModal(modal);
  }
}

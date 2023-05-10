// modal.js

function openModal(modalElement, videoPlayer) {
  modalElement.classList.remove('backdrop--hidden');
  addEventListeners(modalElement, videoPlayer);
}

function closeModal(modalElement, videoPlayer) {
  modalElement.classList.add('backdrop--hidden');
  removeEventListeners(modalElement, videoPlayer);
  stopVideoPlayer(videoPlayer);
}

function addEventListeners(modalElement, videoPlayer) {
  modalElement.addEventListener('click', handleOverlayClick.bind(null, modalElement, videoPlayer));
  modalElement.addEventListener('keydown', handleKeyDown.bind(null, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .addEventListener('click', closeModal.bind(null, modalElement, videoPlayer));
}

function removeEventListeners(modalElement, videoPlayer) {
  modalElement.removeEventListener('click', handleOverlayClick.bind(null, modalElement, videoPlayer));
  modalElement.removeEventListener('keydown', handleKeyDown.bind(null, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .removeEventListener('click', closeModal.bind(null, modalElement, videoPlayer));
}

function handleKeyDown(modalElement, videoPlayer, event) {
  if (event.key === 'Escape' && videoPlayer) {
    closeModal(modalElement, videoPlayer);
  } else {
    closeModal(modalElement);
  }
}

function handleOverlayClick(modalElement, videoPlayer, event) {
  if (event.target === modalElement && videoPlayer) {
    closeModal(modalElement, videoPlayer);
  } else {
    closeModal(modalElement);
  }
}

function stopVideoPlayer(videoPlayer) {
  if (videoPlayer) {
    videoPlayer.stopVideo();
  }
}

export { openModal, closeModal };

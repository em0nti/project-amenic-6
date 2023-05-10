function openModal(modalElement, videoPlayer = null) {
  modalElement.classList.remove('backdrop--hidden');
  if (videoPlayer) {
    addEventListenersTrailer(modalElement, videoPlayer);
  } else {
    addEventListeners(modalElement);
  }
}

function closeModal(modalElement, videoPlayer = null) {
  modalElement.classList.add('backdrop--hidden');

  if (videoPlayer) {
    removeEventListenersTrailer(modalElement, videoPlayer);
    stopVideoPlayer(videoPlayer);
  } else {
    removeEventListeners(modalElement);
  }
}

function addEventListeners(modalElement) {
  modalElement.addEventListener('click', handleOverlayClick.bind(null, modalElement));
  modalElement.addEventListener('keydown', handleKeyDown.bind(null, modalElement));
  modalElement
    .querySelector('[data-modal-close]')
    .addEventListener('click', closeModal.bind(null, modalElement));
}

function addEventListenersTrailer(modalElement, videoPlayer) {
  modalElement.addEventListener('click', handleOverlayClick.bind(null, modalElement, videoPlayer));
  modalElement.addEventListener('keydown', handleKeyDown.bind(null, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .addEventListener('click', closeModal.bind(null, modalElement, videoPlayer));
}

function removeEventListeners(modalElement) {
  modalElement.removeEventListener('click', handleOverlayClick.bind(null, modalElement));
  modalElement.removeEventListener('keydown', handleKeyDown.bind(null, modalElement));
  modalElement
    .querySelector('[data-modal-close]')
    .removeEventListener('click', closeModal.bind(null, modalElement));
}

function removeEventListenersTrailer(modalElement, videoPlayer) {
  modalElement.removeEventListener('click', handleOverlayClick.bind(null, modalElement, videoPlayer));
  modalElement.removeEventListener('keydown', handleKeyDown.bind(null, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .removeEventListener('click', closeModal.bind(null, modalElement, videoPlayer));
}

function handleKeyDown(modalElement, videoPlayer = null, event) {
  if (event.key === 'Escape' && videoPlayer) {
    closeModal(modalElement, videoPlayer);
  } else {
    closeModal(modalElement);
  }
}

function handleOverlayClick(modalElement, videoPlayer = null, event) {
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

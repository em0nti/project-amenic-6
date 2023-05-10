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
  // console.log(`Modal is closed NEW. Player is ${videoPlayer}`);
}

function addEventListeners(modalElement) {
  modalElement.addEventListener('click', e => handleOverlayClick(e, modalElement));
  modalElement.addEventListener('keydown', e => handleKeyDown(e, modalElement));
  modalElement.querySelector('[data-modal-close]').addEventListener('click', () => closeModal(modalElement));
}

function addEventListenersTrailer(modalElement, videoPlayer) {
  modalElement.addEventListener('click', e => handleOverlayClick(e, modalElement, videoPlayer));
  modalElement.addEventListener('keydown', e => handleKeyDown(e, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .addEventListener('click', () => closeModal(modalElement, videoPlayer));
}

function removeEventListeners(modalElement) {
  modalElement.removeEventListener('click', e => handleOverlayClick(e, modalElement));
  modalElement.removeEventListener('keydown', e => handleKeyDown(e, modalElement));
  modalElement.querySelector('[data-modal-close]').removeEventListener('click', () => closeModal(modalElement));
}

function removeEventListenersTrailer(modalElement, videoPlayer) {
  modalElement.removeEventListener('click', e => handleOverlayClick(e, modalElement, videoPlayer));
  modalElement.removeEventListener('keydown', e => handleKeyDown(e, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .removeEventListener('click', () => closeModal(modalElement, videoPlayer));
}

function handleKeyDown(event, modalElement, videoPlayer = null) {
  if (event.key === 'Escape' && videoPlayer) {
    closeModal(modalElement, videoPlayer);
  } else {
    closeModal(modalElement);
  }
}

function handleOverlayClick(event, modalElement, videoPlayer = null) {
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

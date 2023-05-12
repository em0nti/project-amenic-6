function openModal(modalElement, videoPlayer = null) {
  modalElement.classList.remove('backdrop--hidden');
  document.body.classList.add('page--overflow-hidden');
  addEventListeners(modalElement, videoPlayer);
}

function closeModal(modalElement, videoPlayer = null) {
  modalElement.classList.add('backdrop--hidden');
  removeEventListeners(modalElement, videoPlayer);

  if (videoPlayer) {
    stopVideoPlayer(videoPlayer);
  }
  document.body.classList.remove('page--overflow-hidden');
}

function addEventListeners(modalElement, videoPlayer = null) {
  modalElement.addEventListener('click', e => handleOverlayClick(e, modalElement, videoPlayer));
  document.addEventListener('keydown', e => handleKeyDown(e, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .addEventListener('click', () => closeModal(modalElement, videoPlayer));
}

function removeEventListeners(modalElement, videoPlayer = null) {
  modalElement.removeEventListener('click', e => handleOverlayClick(e, modalElement, videoPlayer));
  document.removeEventListener('keydown', e => handleKeyDown(e, modalElement, videoPlayer));
  modalElement
    .querySelector('[data-modal-close]')
    .removeEventListener('click', () => closeModal(modalElement, videoPlayer));
}

function handleKeyDown(event, modalElement, videoPlayer = null) {
  console.log('event.key: ', event.key);
  if (event.key === 'Escape') {
    closeModal(modalElement, videoPlayer);
  }
}

function handleOverlayClick(event, modalElement, videoPlayer = null) {
  if (event.target === modalElement) {
    closeModal(modalElement, videoPlayer);
  }
}

function stopVideoPlayer(videoPlayer) {
  if (videoPlayer) {
    videoPlayer.stopVideo();
  }
}

export { openModal, closeModal };


function openModal(modalElement, videoPlayer = null) {
  modalElement.classList.remove('backdrop--hidden');
  addEventListeners(modalElement, videoPlayer);
}

function closeModal(modalElement, videoPlayer = null) {
  modalElement.classList.add('backdrop--hidden');
  removeEventListeners(modalElement, videoPlayer);

  if (videoPlayer) {
    stopVideoPlayer(videoPlayer);
  }
  console.log(`Modal is closed. Player is ${videoPlayer}`);
}

function handleOverlayClickWrapper(modalElement, videoPlayer = null) {
  return function (event) {
    handleOverlayClick(event, modalElement, videoPlayer);
  };
}

function handleKeyDownWrapper(modalElement, videoPlayer = null) {
  return function (event) {
    handleKeyDown(event, modalElement, videoPlayer);
  };
}

function addEventListeners(modalElement, videoPlayer = null) {
  const overlayClickHandler = handleOverlayClickWrapper(modalElement, videoPlayer);
  const keyDownHandler = handleKeyDownWrapper(modalElement, videoPlayer);

  modalElement.overlayClickHandler = overlayClickHandler;
  modalElement.keyDownHandler = keyDownHandler;

  modalElement.addEventListener('click', overlayClickHandler);
  document.addEventListener('keydown', keyDownHandler);

  modalElement
    .querySelector('[data-modal-close]')
    .addEventListener('click', () => closeModal(modalElement, videoPlayer));
}

function removeEventListeners(modalElement, videoPlayer = null) {
  const overlayClickHandler = modalElement.overlayClickHandler;
  const keyDownHandler = modalElement.keyDownHandler;

  modalElement.removeEventListener('click', overlayClickHandler);
  document.removeEventListener('keydown', keyDownHandler);

  modalElement
    .querySelector('[data-modal-close]')
    .removeEventListener('click', () => closeModal(modalElement, videoPlayer));
}

function handleKeyDown(event, modalElement, videoPlayer = null) {
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
(() => {
  const refs = {
    openModalBtn: document.querySelector('.button-switch'),
    // closeModalBtn: document.querySelector("[data-modal-close]"),
    day: document.querySelector('.switch-day'),
    night: document.querySelector('.switch-night'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  //   refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.body.classList.toggle('color');
    refs.night.classList.toggle('switch-hidden');
  }
})();

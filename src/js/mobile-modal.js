const refs = {
  openModal: document.querySelector(`.test`),
  closeModal: document.querySelector(`.close_modal-cross`),
  menu: document.querySelector(`.mobile_modal-conainer`),
};

refs.openModal.addEventListener('click', toggleMenu);
refs.closeModal.addEventListener('click', toggleMenu);
function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
}

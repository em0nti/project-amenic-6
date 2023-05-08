const refs = {
  openModal: document.querySelector('.header__menu-toggle'),
  closeModal: document.querySelector('.close_modal-cross'),
  menu: document.querySelector('.mobile_modal-conainer'),
  backdrop: document.querySelector('.backdrop'),
};

refs.openModal.addEventListener('click', toggleMenu);
refs.closeModal.addEventListener('click', toggleMenu);

function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
  refs.backdrop.classList.toggle('backdrop--hidden');
}

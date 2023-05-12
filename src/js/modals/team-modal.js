const teamModalRef = document.getElementById('team-modal');
const footerBtn = document.getElementById('footer__modal-btn');
footerBtn.addEventListener('click', openModal);
function openModal() {
  teamModalRef.classList.toggle('backdrop--hidden');
}

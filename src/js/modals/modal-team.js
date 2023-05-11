const container = document.querySelector(".footer__team-modal-js");

container.addEventListener("click", openModal);

function openModal(e) {
  modal.show();

  window.addEventListener("keydown", closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", closeModalHandler);
    }
  }
}
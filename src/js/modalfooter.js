const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.addEventListener('click', () => {
    const modalId = member.dataset.modal;

    const modal = document.getElementById(modalId);

    modal.classList.add('open');
  });
});

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.parentElement.parentElement;

    modal.classList.remove('open');
  });
});

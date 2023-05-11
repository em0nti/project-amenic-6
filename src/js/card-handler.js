import { refs, state } from './constants.js';
import { onShowPopUpModal } from './functions.js';
import { onClickAddToLibrary } from './add-to-library-handler';
import { openModal } from './modals/open-close-modals';

// refs.cards.addEventListener('click', onCardClick);
export function onCardClick(e) {
  e.preventDefault();
  const card = e.target.closest('.card');
  if(!card) {
    console.log('!card');
    e.stopImmediatePropagation();
    return;
  }
  openModal(refs.modalPopUp);
  const movieId = card.dataset.id;
  state.activeCard.id = movieId;
  onShowPopUpModal(movieId).then((cardID) => {
    const cardStorage = state.cardStorage;
    if (cardStorage.hasCardId(cardID)) {
      document.getElementById('add-to-library-btn').textContent = 'Remove from my library'
    }
    document.getElementById('add-to-library-btn').addEventListener('click', () => onClickAddToLibrary(cardID));

  });
}

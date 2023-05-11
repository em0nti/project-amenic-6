import { state } from './constants.js';
import { onShowPopUpModal } from './functions.js';

// refs.cards.addEventListener('click', onCardClick);
export function onCardClick(e) {
  e.preventDefault();
  const card = e.target.closest('.card');
  const movieId = card.dataset.id;
  state.activeCard.id = movieId;
  console.log(movieId);
  onShowPopUpModal(movieId).then(() => {
    document.getElementById('add-to-library-btn').addEventListener('click', () => console.log('Add to my Library Listener works'));
  });
}

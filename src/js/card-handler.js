import { refs, state } from './constants.js';

refs.cards.addEventListener('click', onCardClick);


export function onCardClick(e) {
  e.preventDefault();
  const card = e.target.closest('.card');
  const movieId = card.dataset.id;
  state.activeCard.id = movieId;
  console.log(movieId);
}


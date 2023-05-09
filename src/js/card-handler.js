import { refs, activeCardState } from './constants.js';
export function onCardClick(e) {
  e.preventDefault();
  const isCard = e.target.classList.contains('card');
  if (!isCard) {
    return;
  }

  const movieId = e.target.dataset.id;
  activeCardState.id = movieId;
  console.log(movieId);
}

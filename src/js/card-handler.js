import { refs, state } from './constants.js';
import * as localSt from './storage';
import { onShowPopUpModal } from './functions';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

refs.cards.addEventListener('click', onCardClick);
export function onCardClick(e) {
  e.preventDefault();
  const card = e.target.closest('.card');
  const movieId = card.dataset.id;
  state.activeCard.id = movieId;
  Loading.standard();
  onShowPopUpModal(movieId);
  Loading.remove();
}

import { state } from './constants';
import { markupFilmByIDArray } from './functions';
import { Loading } from 'notiflix';

export function onClickAddToLibrary(cardID) {
  const cardStorage = state.cardStorage;
  let cardsIds = cardStorage.getCardIds().map(Number);
  const pageTitleRefs = document.title;

  if (!cardStorage.hasCardId(cardID)) {
    cardStorage.addCardId(cardID);
    document.getElementById('add-to-library-btn').textContent = 'Remove from my library';
    if (pageTitleRefs === 'My Library - Cinemania') {
      cardsIds = cardStorage.getCardIds().map(Number);
      markupFilmByIDArray(cardsIds)
    }

  } else {
    cardStorage.removeCardId(cardID);
    document.getElementById('add-to-library-btn').textContent = 'Add to my library';
    if (pageTitleRefs === 'My Library - Cinemania') {
      cardsIds = cardStorage.getCardIds().map(Number);

      markupFilmByIDArray(cardsIds)
    }
  }
}
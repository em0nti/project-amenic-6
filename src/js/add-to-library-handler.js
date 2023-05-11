import { state } from './constants';


export function onClickAddToLibrary(cardID) {
  const cardStorage = state.cardStorage;

  if (!cardStorage.hasCardId(cardID)) {
    cardStorage.addCardId(cardID);
    document.getElementById('add-to-library-btn').textContent = 'Remove from my library';
  } else {
    cardStorage.removeCardId(cardID);
    document.getElementById('add-to-library-btn').textContent = 'Add to my library';
  }
}
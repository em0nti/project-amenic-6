import { refs } from '../constants';
import { openModal } from './open-close-modals';
import { onWatchTrailerClick } from '../watch-trailer';
import { onCardClick } from '../card-handler';
import { onClickAddRemoveFromLibrary } from '../modals/add-remove-id-storage';

export function initModals() {
  // add an event listener to open the modals
  //example
  //refs.watchTrailerBtn.addEventListener('click', () => openModal(refs.modalTrailer));
  // refs.popupBtn.addEventListener('click', () => openModal(refs.modalPopup));

  const currentPage = window.location.pathname;
  if (currentPage === '/library.html') {
    refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));
    refs.cards.addEventListener('click', e => onCardClick(e));
    // refs.addToLibraryBtn.addEventListener('click', onClickAddRemoveFromLibrary);
    return;
  }
  //refs.watchTrailerBtn.addEventListener('click', () => onWatchTrailerClick(493529));
  refs.cards.addEventListener('click', e => onCardClick(e));
  refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));
  // refs.addToLibraryBtn.addEventListener('click', onClickAddRemoveFromLibrary);
}

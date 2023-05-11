import { currentPage } from './show-current-page';
import { refs } from './constants.js';
import { onCardClick } from './card-handler.js';
import { openModal } from './modals/open-close-modals';

refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));
refs.cards.addEventListener('click', e => onCardClick(e));

currentPage();

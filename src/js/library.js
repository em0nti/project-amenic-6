import { currentPage } from './show-current-page';
import { refs, state } from './constants';
import { onCardClick } from './card-handler';
import { openModal } from './modals/open-close-modals';
import { CardStorage } from './classes/card-storage';

refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));
refs.cards.addEventListener('click', e => onCardClick(e));

currentPage();

const cardStorage = new CardStorage();
cardStorage.init();
state.cardStorage = cardStorage;
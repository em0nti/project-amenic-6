import { currentPage } from './show-current-page';
import { refs, state } from './constants';
import { onCardClick } from './card-handler';
import { openModal } from './modals/open-close-modals';
import { CardStorage } from './classes/card-storage';

refs.mobileMenuToggler.addEventListener('click', () => openModal(refs.mobileMenu));

currentPage();

const cardStorage = new CardStorage();
cardStorage.init();
state.cardStorage = cardStorage;

const cardsIds = cardStorage.getCardIds().map(Number);
console.log(cardsIds);
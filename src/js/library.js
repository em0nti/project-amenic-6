import { currentPage } from './show-current-page';
import { refs } from './constants';
import { onCardClick } from './card-handler';
import initModals from './modals/init-modals';

initModals();

currentPage();

refs.cards.addEventListener('click', onCardClick);

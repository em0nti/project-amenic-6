//this is class for fetching data
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import { refs, state } from './constants';
import { currentPage } from './show-current-page';
import {
  onChangeWeeklyTrendsByScreenWidth,
  onChangemarkupFilmUpcomingsByScreenWidth,
} from './functions';
import { onCardClick } from './card-handler';
import { openModal } from './modals/open-close-modals';
import { CardStorage } from './classes/card-storage';

currentPage();

refs.cards.addEventListener('click', e => onCardClick(e));
refs.mobileMenuToggler.addEventListener('click', () => openModal(refs.mobileMenu));

//Init storage for IDs on startup
const cardStorage = new CardStorage();
cardStorage.init();
state.cardStorage = cardStorage;

// create instance 'apiFetchService' for using in functions
const apiFetchService = new ApiFetchService();
const apiMarkupService = new ApiMarkupService();

window.addEventListener('load', () => {
  onChangeWeeklyTrendsByScreenWidth(refs.sectionWeeklyTrends, 3);
});
window.addEventListener('load', () => {
  onChangemarkupFilmUpcomingsByScreenWidth(refs.sectionUpcoming, 3);
});

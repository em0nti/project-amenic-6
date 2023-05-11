//this is class for fetching data
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import { currentPage } from './show-current-page';
import {onChangeWeeklyTrendsByScreenWidth, onChangemarkupFilmUpcomingsByScreenWidth} from './page-render.js';
import { onCardClick } from "./card-handler.js";
import { openModal } from './modals/open-close-modals';
import { refs } from './constants.js';

currentPage();

refs.cards.addEventListener('click', e => onCardClick(e));
refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));

// create instance 'apiFetchService' for using in functions
const apiFetchService = new ApiFetchService();
const apiMarkupService = new ApiMarkupService();

window.addEventListener('load', () => {
  // console.log(e);
  onChangeWeeklyTrendsByScreenWidth(refs.sectionWeeklyTrends, 3);
});
window.addEventListener('load', () => {
  // console.log(e);
  onChangemarkupFilmUpcomingsByScreenWidth(refs.sectionUpcoming, 3);
});


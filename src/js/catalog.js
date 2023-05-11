// import initChoices from './search-styling';
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import { refs, state } from './constants';
import { currentPage } from './show-current-page';
//import { markupFilmByQuery } from '.';

import {
  markupFilmByQuery,
  markUpWeeklyTrends,
  markUpDayTrends,
  markupFilmByID,
  markupFilmByIDArray,
  markupFilmUpcoming,
  getRandomInt,
  onChangeWeeklyTrendsByResizeViewport,
  onChangeWeeklyTrendsByScreenWidth,
  onShowPopUpModal,
} from './functions';
import { onWatchTrailerClick } from './watch-trailer';
import { onCardClick } from './card-handler';
import { openModal } from './modals/open-close-modals';
import { CardStorage } from './classes/card-storage';

currentPage();

const cardStorage = new CardStorage();
cardStorage.init();
state.cardStorage = cardStorage;

refs.cards.addEventListener('click', e => onCardClick(e));
refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));
refs.mobileMenuToggler.addEventListener('click', () => openModal(refs.mobileMenu));
// initChoices();

// create instance 'apiFetchService' for using in functions
const apiFetchService = new ApiFetchService();
const apiMarkupService = new ApiMarkupService();

const form = document.querySelector('.search-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.firstElementChild.value.trim() === '') {
    //  refs.loadMoreBtn.classList.add('is-hidden');
    //  Notify.info('Please enter the query parameters.');
    return;
  }
  const searchQuery = e.target.firstElementChild.value.trim();
  console.log(searchQuery);
  let filmMarkup = markupFilmByQuery(searchQuery)
    .then(data => {
      if (data === '') {
        document.querySelector('.catalog__movi-catalog-list').innerHTML =
          apiMarkupService.markupErrorCatalog();
        return;
      } else {
        refs.sectionCatalogCardSet.innerHTML = data;
      }
    })
    .catch(err => {
      console.log(err);
      document.querySelector('.catalog__movi-catalog-list').innerHTML =
        apiMarkupService.markupErrorCatalog();
    });
  // refs.sectionCatalogCardSet.innerHTML = filmMarkup;

  // refs.sectionCatalogCardSet.innerHTML = filmMarkup;
});
//function to markup film by search query
console.log('catalog.js is loaded', form);
// function onSearchSubmit(event) {
//   event.preventDefault();
//   console.log(refs.form.input.value);
// }
const viewportData = window.matchMedia('(max-width: 767px)');
//viewportData.addEventListener('change', onChangeWeeklyTrendsByResizeViewport);
window.addEventListener('load', e => {
  onChangeWeeklyTrendsByScreenWidth(refs.sectionCatalogCardSet, 12);
});

const observer = new IntersectionObserver();

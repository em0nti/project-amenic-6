// import initChoices from './search-styling';
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import { initModals } from './modals/init-modals';
import { refs } from './constants';
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

currentPage();

initModals();
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
      refs.sectionCatalogCardSet.innerHTML = data;
    })
    .catch(err => console.log(err));
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
window.addEventListener('load', onChangeWeeklyTrendsByScreenWidth(refs.sectionCatalogCardSet, 10));

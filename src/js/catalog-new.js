import { tmdbApi } from './components/tmdbApi';
import { trendsApi } from './components/trendsApi';
import scrollToTop from './components/scroll-to-top';
import intersection from './components/infinite-scroll';
import appendMovieCards from './components/append-movie-cards';
import clearPage from './components/clear-page';
// import initChoices from './search-styling';
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
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
import { onWatchTrailerClick } from './watch-trailer';
import { onCardClick } from './card-handler';
import { openModal } from './modals/open-close-modals';

currentPage();

const bodyRef = document.querySelector('body');

const inputRef = document.querySelector('input');
const cardSetRef = document.querySelector('.card-set');

const formRef = document.querySelector('.search-form');

refs.cards.addEventListener('click', e => onCardClick(e));
refs.cards.addEventListener('click', () => openModal(refs.modalPopUp));

formRef.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  tmdbApi.form = formRef;
  tmdbApi.query = event.currentTarget.elements.query.value.trim();

  handleSearch(tmdbApi.query);
}
async function handleSearch() {
  try {
    if (tmdbApi.query === '') {
      throw new Error();
    }
      clearPage();
      
    await appendMovieCards();
    scrollToTop();
    intersection();
  } catch (error) {
    console.log(error.message);
  }
}

async function showWeeklyTrends() {
  try {
    // if (tmdbApi.query === '') {
    //   throw new Error();
    // }
    clearPage();
    await appendMovieCards();
    scrollToTop();
    intersection();
  } catch (error) {
    console.log(error.message);
  }
}

function onWeeklyTrends() {
  //   event.preventDefault();

  //   trendsApi.form = formRef;
  trendsApi.trendsType = 'week';

  showWeeklyTrends();
}

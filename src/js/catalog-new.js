import { Loading } from 'notiflix';

import { tmdbApi } from './components/tmdbApi';
import { trendsApi } from './components/trendsApi';
import scrollToTop from './components/scroll-to-top';
import intersection from './components/infinite-scroll';
import intersectionWeekly from './components/infinite-scroll-weekly';
import appendMovieCards from './components/append-movie-cards';
import renderSearchFail from './components/render-search-fail';
import appendTrendsCards from './components/append-weekly-cards';
import clearPage from './components/clear-page';
import { CardStorage } from './classes/card-storage';
import { refs, state } from './constants';
// import initChoices from './search-styling';
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import { refs } from './constants';
import { currentPage } from './show-current-page';
import { switchTheme } from './theme';

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

refs.cards.addEventListener('click', e => onCardClick(e));
refs.mobileMenuToggler.addEventListener('click', () => openModal(refs.mobileMenu));
//Init storage for IDs on startup
const cardStorage = new CardStorage();
cardStorage.init();
state.cardStorage = cardStorage;

const bodyRef = document.querySelector('body');

const inputRef = document.querySelector('input');
const cardSetRef = document.querySelector('.card-set');

const formRef = document.querySelector('.search-form');

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
      throw new Error(error);
    }
    clearPage();
    Loading.pulse();
    await appendMovieCards();
    intersection();
    Loading.remove();
  } catch (error) {
    
    renderSearchFail();
    console.log("handleSearch error:", error.message);
  }
}

async function showWeeklyTrends() {
  try {
    clearPage();

    await appendTrendsCards();
    // intersection();


  } catch (error) {
    console.log(error.message);
  }
}

function onWeeklyTrends() {
  trendsApi.setTrendsType = 'week';
  showWeeklyTrends();
}
Loading.pulse();
onWeeklyTrends();

markUpDayTrends('backdrop');
switchTheme();

Loading.remove();


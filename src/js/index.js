//this is class for fetching data
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import initModals from './modals/init-modals';
import { refs } from './constants';
import { currentPage } from './show-current-page';

currentPage();

initModals();

// create instance 'apiFetchService' for using in functions
const apiFetchService = new ApiFetchService();
const apiMarkupService = new ApiMarkupService();

// test params for fetching data by query
//--------------//
// set query by string see example below
// apiFetchService.setQuery = 'Dungeons & Dragons: Honor Among Thieves';
// this call return Promise use 'then' to see data;
// apiFetchService.fetchFilmByQuery();
// apiFetchService.setCountry = 'US';
// apiFetchService.setYear = 2021;
// apiFetchService.setTrendsType = 'week';
// apiFetchService.fetchFilmTrends();

//function to markup film by search query
async function markupFilmByQuery(searchQuery) {
  try {
    apiFetchService.setQuery = await searchQuery;
    await apiFetchService.fetchFilmGenres();
    await apiFetchService.fetchFilmByQuery();
    let dataFromQuery = await apiFetchService.getFilmsByQuery;
    // apiMarkupService.setFilmsForMarkup = '';
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    apiMarkupService.setFilmsForMarkup = await dataFromQuery;

    // let filmMarklUp = await apiMarkupService.markupFilmCard(apiMarkupService.getFilmsForMarkup);
    let filmMarklUp = await apiMarkupService.markupGallery();

    console.log(filmMarklUp);
  } catch (error) {
    console.log(error);
  }
}
// function to markup weekly trends film
async function markUpWeeklyTrends(numOfArray) {
  try {
    apiFetchService.setTrendsType = 'week';
    await apiFetchService.fetchFilmGenres();
    await apiFetchService.fetchFilmTrends();
    let dataFromTrends = await apiFetchService.getFilmsTrends;
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    // apiMarkupService.setFilmsForMarkup = '';
    apiMarkupService.setFilmsForMarkup = await dataFromTrends;
    let filmMarklUp = await apiMarkupService.markupGallery(numOfArray);

    refs.sectionWeeklyTrends.innerHTML = filmMarklUp;
    // refs.sectioWeeklyTrends.insertAdjacentHTML('beforeend', filmMarklUp);

    // console.log(filmMarklUp);
  } catch (error) {
    console.log(error);
  }
}
// function to markup day trends film
async function markUpDayTrends(posterType) {
  try {
    let filmArrayIDtoMarkup = getRandomInt(18);
    apiFetchService.setTrendsType = 'day';
    await apiFetchService.fetchFilmGenres();
    await apiFetchService.fetchFilmTrends();
    let dataFromTrends = await apiFetchService.getFilmsTrends;
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    // apiMarkupService.setFilmsForMarkup = '';
    apiMarkupService.setFilmsForMarkup = await dataFromTrends[filmArrayIDtoMarkup];
    let filmDataFormMarkup = apiMarkupService.getFilmsForMarkup;
    // console.log(
    //   'filmDataFormMarkupfilmDataFormMarkupfilmDataFormMarkupfilmDataFormMarkupfilmDataFormMarkup',
    //   filmDataFormMarkup,
    // );
    let filmMarklUp = await apiMarkupService.markupFilmHeroTrendsDay(filmDataFormMarkup);

    refs.sectionHeroDayTrends.innerHTML = filmMarklUp;
    backGroundPoster = document.querySelector('.hero');

    if (posterType === 'backdrop') {
      let backGroundPosterPath = filmDataFormMarkup.backdrop_path;
      backGroundPoster.style.backgroundImage = `linear-gradient(87.8deg, #0e0e0e 15.61%, rgba(14, 14, 14, 0) 60.39%), url(blak-desk.a6d97ec1.png), url('https://image.tmdb.org/t/p/original/${backGroundPosterPath}')`;
    } else if (posterType === 'poster') {
      let backGroundBackdropPath = filmDataFormMarkup.poster_path;
      backGroundPoster.style.backgroundImage = `linear-gradient(87.8deg, #0e0e0e 15.61%, rgba(14, 14, 14, 0) 60.39%), url(blak-desk.a6d97ec1.png), url('https://image.tmdb.org/t/p/original/${backGroundBackdropPath}')`;
    }

    //refs.sectionHeroDayTrends.insertAdjacentHTML('beforeend', filmMarklUp);

    // console.log('markUpDayTrends', filmMarklUp);
  } catch (error) {
    console.log(error);
  }
}
//function to markup film by ID .Usage for PopUpfilm card
async function markupFilmByID(ID) {
  try {
    await apiFetchService.fetchFilmGenres();
    let dataFilmFromID = await apiFetchService.fetchFilmByID(ID);
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    // console.log(dataFilmFromID);
    // apiMarkupService.setFilmsForMarkup = await dataFilmFromID;
    let markupFilmByID = await apiMarkupService.markupFilmCardByID(dataFilmFromID);
    // console.log(markupFilmByID);
  } catch (error) {
    console.log(error);
  }
}
//function to markup films by array od ID's. like [809,808,766] etc. Usage for my Library
async function markupFilmByIDArray(arrayID) {
  try {
    await apiFetchService.fetchFilmGenres();
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    apiFetchService.setFilmsIDArray = arrayID;
    await apiFetchService.fetchFilmByIDArray();
    apiMarkupService.setFilmsForMarkup = apiFetchService.getFilmsArrayByID;
    let filmMarklUp = await apiMarkupService.markupGalleryByID();
    console.log(filmMarklUp);

    refs.sectionGallery.insertAdjacentHTML('beforeend', filmMarklUp);

    // console.log(filmMarklUp);
  } catch (error) {
    console.log(error);
  }
}
//function to markup filmUpcoming with randomizer
async function markupFilmUpcoming(posterType) {
  try {
    let filmArrayIDtoMarkup = getRandomInt(18);
    await apiFetchService.fetchFilmGenres();
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    let dataFilmUpcoming = await apiFetchService.fetchFilmUpcoming();
    let dataFilmUpcomingForMarkup = await dataFilmUpcoming[filmArrayIDtoMarkup];
    //console.log(dataFilmUpcomingForMarkup);

    let markupFilmUpcoming = await apiMarkupService.markupFilmCardUpcoming(
      dataFilmUpcomingForMarkup,
      posterType,
    );
    // console.log(markupFilmUpcoming);
    refs.sectionUpcoming.innerHTML = markupFilmUpcoming;
    // refs.sectionUpcoming.insertAdjacentHTML('beforeend', markupFilmUpcoming);
  } catch (error) {
    console.log(error);
  }
}
//function to get random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// show weekly trends 3 films
// markUpWeeklyTrends(3);
//render film to Upcoming section
//markupFilmUpcoming('poster');
//show day trends in hero home section
// markUpDayTrends(1);

//====TESTS=====//
// markupFilmUpcoming();
// markupFilmByIDArray([808, 493529]);
// markupFilmByID(808);
// markUpWeeklyTrends(3);
// markupFilmByQuery('Dungeons & Dragons: Honor Among Thieves');
// markupFilmByQuery('cat');
// apiFetchService.fetchFilmImagesByID(808);
// console.log(refs);
// markUpDayTrends('backdrop');
// section which use screen viewport and change parametres and rerender
const viewportData = window.matchMedia('(max-width: 767px)');
viewportData.addEventListener('change', onChangeWeeklyTrendsByResizeViewport);
window.addEventListener('load', onChangeWeeklyTrendsByScreenWidth);

async function onChangeWeeklyTrendsByResizeViewport(e) {
  try {
    if (e.matches) {
      markUpWeeklyTrends(1);
      markupFilmUpcoming('poster');
      markUpDayTrends('poster');
      console.log('markUpWeeklyTrends(1)');
    } else {
      markUpWeeklyTrends(3);
      markupFilmUpcoming('backdrop');
      markUpDayTrends('backdrop');
      console.log('markUpWeeklyTrends(3)');
    }
  } catch (error) {
    console.log(error);
  }
}

async function onChangeWeeklyTrendsByScreenWidth() {
  try {
    let screenWidth = window.innerWidth;
    //console.log('current Width Screen in px is: ', screenWidth);
    if (screenWidth < 768) {
      markUpWeeklyTrends(1);
      markUpDayTrends('poster');
      markupFilmUpcoming('backdrop');
    } else {
      markUpWeeklyTrends(3);
      markUpDayTrends('backdrop');
      markupFilmUpcoming('backdrop');
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

async function onShowPopUpModal(ID) {
  try {
    await apiFetchService.fetchFilmGenres();
    let dataFilmFromID = await apiFetchService.fetchFilmByID(ID);
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    // console.log(dataFilmFromID);
    // apiMarkupService.setFilmsForMarkup = await dataFilmFromID;
    let markupFilmByID = await apiMarkupService.markupFilmCardPopUpByID(dataFilmFromID);
    // console.log(markupFilmByID);
    refs.popUpModal.innerHTML = markupFilmByID;
  } catch (error) {
    console.log(error);
  }
}

// onShowPopUpModal(808);

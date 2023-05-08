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

    refs.sectioWeeklyTrends.insertAdjacentHTML('beforeend', filmMarklUp);

    // console.log(filmMarklUp);
  } catch (error) {
    console.log(error);
  }
}
// function to markup day trends film
async function markUpDayTrends(numOfArray) {
  try {
    let filmArrayIDtoMarkup = getRandomInt(18);
    apiFetchService.setTrendsType = 'day';
    await apiFetchService.fetchFilmGenres();
    await apiFetchService.fetchFilmTrends();
    let dataFromTrends = await apiFetchService.getFilmsTrends;
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    // apiMarkupService.setFilmsForMarkup = '';
    apiMarkupService.setFilmsForMarkup = await dataFromTrends[filmArrayIDtoMarkup];
    filmDataFormMarkup = apiMarkupService.getFilmsForMarkup;
    let filmMarklUp = await apiMarkupService.markupFilmHeroTrendsDay(filmDataFormMarkup);

    refs.sectionHeroDayTrends.insertAdjacentHTML('beforeend', filmMarklUp);

    console.log('markUpDayTrends', filmMarklUp);
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
    console.log(markupFilmByID);
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
async function markupFilmUpcoming() {
  try {
    let filmArrayIDtoMarkup = getRandomInt(18);
    await apiFetchService.fetchFilmGenres();
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    let dataFilmUpcoming = await apiFetchService.fetchFilmUpcoming();
    let dataFilmUpcomingForMarkup = await dataFilmUpcoming[filmArrayIDtoMarkup];
    console.log(dataFilmUpcomingForMarkup);

    let markupFilmUpcoming = await apiMarkupService.markupFilmCardUpcoming(dataFilmUpcomingForMarkup);
    // console.log(markupFilmUpcoming);

    refs.sectionUpcoming.insertAdjacentHTML('beforeend', markupFilmUpcoming);
  } catch (error) {
    console.log(error);
  }
}
//function to get random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// show weekly trends 3 films
markUpWeeklyTrends(3);
//render film to Upcoming section
markupFilmUpcoming();
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

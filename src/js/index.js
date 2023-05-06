//this is class for fetching data
import ApiFetchService from './api_fetch_service';
import initModals from './init-open-close-modals';

initModals();

// create instance 'apiFetchService' for using in functions
const apiFetchService = new ApiFetchService();

// test params for fetching data by query
//--------------//
// set query by string see example below
// apiFetchService.setQuery = 'cat';
// this call return Promise use 'then' to see data;
// apiFetchService.fetchFilmByQuery();
// apiFetchService.setCountry = 'US';
// apiFetchService.setYear = 2021;
// apiFetchService.fetchFilmGenres();
// apiFetchService.fetchFilmDiscoverWithCountry();
// apiFetchService.fetchFilmByID(apiFetchService.getID);

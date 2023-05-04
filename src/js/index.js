import ApiFetchService from './apiFetchService';

const apiFetchService = new ApiFetchService();

apiFetchService.setQuery = 'cat';
apiFetchService.fetchFilmByQuery();

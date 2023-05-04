import ApiFetchService from './apiFetchService';

const apiFetchService = new ApiFetchService();

// apiFetchService.fetchFilmList().then(data => {
//   console.log(data);
// });

// apiFetchService.fetchFilmDiscoverWithoutCountry().then(data => {
//   console.log(data);
// });

apiFetchService.fetchFilmDiscoverWithCountry();
console.log(
  apiFetchService.fetchFilmDiscoverWithCountry().then(data => {
    return data;
  }),
);

// console.log(apiFetchService.fetchFilmDiscoverWithCountry().then(data => data));

// apiFetchService.fetchFilmByID().then(data => {
//   console.log(data.production_countries);
// });

// apiFetchService.fetchFilmByQuery();

function filterFilms(evt) {}

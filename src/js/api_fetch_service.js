import axios from 'axios';
import ApiMarkupService from './api_markup_service';
const apiMarkupService = new ApiMarkupService();

export default class ApiFetchService {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    // the api key for service
    this.key = '91ae85947dca7203ec2b4d7841a3c73b';
    // film release year
    this.year = 1;
    // film genre for filter, you can use string divides by comma ','. Example '28' get id of genres by method 'fetchFilmGenres'
    this.genre = '';
    //country short name for filter. Example 'US'
    this.country = '';
    this.page = 1;
    this.language = 'en-US';
    // for search by ID
    this.id = 1;
    // use string query for search Film
    this.query = '';
    // use 'day' or 'week' to see trending list for the day or trending list for the week
    this.trends_type = '';
    // here will be stored array of genres from service
    this.genres = [];
    // here we have films array by Query fetch
    this.filmsByQuery = [];
    // here we have films array  by trends film fetch
    this.filmsTrends = [];
    //here we have films array by films ID's
    this.filmsIDArray = [];
    //here we have film data by film ID
    this.filmByID = [];
    // here we have array of films when we use array with id nubers like [808,809,909]
    this.filmsArrayByID = [];
    //here we have array of Upcoming films
    this.filmUpcoming = [];
  }

  //fetch films for search with parametres (beta, beta)
  async fetchFilmDiscoverWithCountry() {
    const urlWithParams = `${this.url}discover/movie?api_key=${this.key}&language=${this.language}&with_genres=${this.genre}&primary_release_year=${this.year}`;
    try {
      const { data } = await axios.get(urlWithParams);
      const arrayFilmsID = await data.results.map(film => film.id);
      const ArrayFilmID = [];

      for (let i = 0; i < arrayFilmsID.length; i++) {
        const objectByFilmID = await this.fetchFilmByID(arrayFilmsID[i]);
        const someArray = objectByFilmID.production_countries.some(
          country => country.iso_3166_1 === this.country,
        );

        if (someArray) {
          ArrayFilmID.push(objectByFilmID);
        }
      }

      return ArrayFilmID;
    } catch (error) {
      console.log(error.message);
    }
  }

  // fetch film by Film ID
  async fetchFilmByID(filmID) {
    try {
      this.id = filmID;
      const urlByID = `${this.url}movie/${filmID}?api_key=${this.key}&language=${this.language}`;
      const { data } = await axios.get(urlByID);
      this.filmByID = data;
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  // fetch images posters by ID
  async fetchFilmImagesByID(filmID) {
    try {
      const urlImagesByID = `${this.url}movie/${filmID}/images?api_key=${this.key}`;
      const { data } = await axios.get(urlImagesByID);
      console.log("log in method 'fetchFilmByID': ", data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  //fetch film by id array, like [505,509,999]
  async fetchFilmByIDArray() {
    try {
      const filmsArray = this.filmsIDArray;

      const filmsArrayForMarkup = [];
      for (const film of filmsArray) {
        await this.fetchFilmByID(film);
        filmsArrayForMarkup.push(this.filmByID);
      }
      this.filmsArrayByID = filmsArrayForMarkup;
    } catch (error) {
      console.log(error);
    }
  }

  //fetch film by query
  async fetchFilmByQuery() {
    try {
      const urlByQuery = `${this.url}search/movie?api_key=${this.key}&language=${this.language}&query=${this.query}&page=${this.page}`;
      const { data } = await axios.get(urlByQuery);
      console.log("log in method 'fetchFilmByQuery': ", data.results);
      this.filmsByQuery = data.results;
      return data.results;
    } catch (error) {
      console.log(error.message);
      document.querySelector('.catalog__movi-catalog-list').innerHTML =
        apiMarkupService.markupErrorCatalog();
    }
  }

  //fetch trend films. set parametres to 'week' or 'day' in setter
  async fetchFilmTrends() {
    const urlTrends = `${this.url}trending/movie/${this.trends_type}?api_key=${this.key}&page=${this.page}`;
    try {
      const { data } = await axios.get(urlTrends);
      this.filmsTrends = data.results;
      return data.results;
    } catch (error) {
      document.querySelector('.catalog__movi-catalog-list').innerHTML =
        apiMarkupService.markupErrorCatalog();
      console.log(error);
    }
  }

  //fetch upcoming films
  async fetchFilmUpcoming() {
    const urlUpcoming = `${this.url}movie/upcoming?api_key=${this.key}&language=${this.language}&page=${this.page}`;
    try {
      const { data } = await axios.get(urlUpcoming);
      this.filmUpcoming = data.results;
      return data.results;
    } catch (error) {
      console.log(error.message);
    }
  }
  //fetch film genres array
  async fetchFilmGenres() {
    const urlGengres = `${this.url}genre/movie/list?api_key=${this.key}`;
    try {
      const { data } = await axios.get(urlGengres);
      this.genres = data.genres;
      return data.genres;
    } catch (error) {
      console.log(error.message);
    }
  }

  //fetch films country data
  async fetchFilmCountries() {
    const urlCountries = `${this.url}configuration/countries?api_key=${this.key}`;
    try {
      const { data } = await axios.get(urlCountries);

      console.log("log in method 'fetchFilmCountries': ", data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  //getter year search. Usage for method 'fetchFilmDiscoverWithCountry'
  get getYear() {
    return this.year;
  }
  //setter year search. Usage for method 'fetchFilmDiscoverWithCountry'
  set setYear(year) {
    this.year = year;
  }
  //getter page for api query. Usage in many methods
  get getPage() {
    return this.page;
  }
  //getter page for api query. Usage in many methods
  set setPage(numpage) {
    this.page = numpage;
  }
  //getter genre search. Usage for method 'fetchFilmDiscoverWithCountry'
  get getGenre() {
    return this.genre;
  }
  //setter genre search. Usage for method 'fetchFilmDiscoverWithCountry'
  set setGenre(genre) {
    this.genre = genre;
  }
  //getter country search. Usage for method 'fetchFilmDiscoverWithCountry'
  get getCountry() {
    return this.country;
  }
  //setter country search. Usage for method 'fetchFilmDiscoverWithCountry'
  set setCountry(country) {
    this.country = country;
  }
  // getter language search in api query. Usage in many methods
  get getLang() {
    return this.language;
  }
  // setter language search in api query. Usage in many methods
  set setLang(language) {
    this.language = language;
  }
  //getter for fetch film by ID
  get getID() {
    return this.id;
  }
  //setter for fetch film by ID
  set setID(id) {
    this.id = id;
  }
  //getter for fetch film by query
  get getQuery() {
    return this.query;
  }
  //setter for fetch film by query
  set setQuery(query) {
    this.query = query;
  }
  //getter of type of trends. 'week' or 'day'
  get getTrendsType() {
    return this.trends_type;
  }
  //setter of type of trends. 'week' or 'day'
  set setTrendsType(trends_type) {
    this.trends_type = trends_type;
  }
  //getter for array list of genres. use only after usage 'fetchFilmGenres' method
  get getGenresAll() {
    return this.genres;
  }

  // getter for array of films by query. use only after usage 'fetchFilmByQuery' method
  get getFilmsByQuery() {
    return this.filmsByQuery;
  }
  // getter for array of trend films. use only after usage 'fetchFilmTrends' method
  get getFilmsTrends() {
    return this.filmsTrends;
  }
  // getter for array of trend films
  get getFilmsIDArray() {
    return this.filmsIDArray;
  }
  //setter for getting films by array of ID, like [808,809,788]
  set setFilmsIDArray(filmsIDArray) {
    this.filmsIDArray = filmsIDArray;
  }
  //getter for getting film data by ID query
  get getFilmDataByID() {
    return this.filmByID;
  }
  //getter for films
  get getFilmsArrayByID() {
    return this.filmsArrayByID;
  }
}

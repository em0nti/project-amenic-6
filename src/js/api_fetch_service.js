import axios from 'axios';

export default class ApiFetchService {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
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
    this.id = 808;
    // use string query for search Film
    this.query = '';
    // use 'day' or 'week' to see trending list for the day or trending list for the week
    this.trends_type = '';
  }

  async fetchFilmDiscoverWithCountry() {
    const urlWithParams = `${this.url}discover/movie?api_key=${this.key}&language=${this.language}&with_genres=${this.genre}&primary_release_year=${this.year}`;
    console.log(urlWithParams);
    try {
      let { data } = await axios.get(urlWithParams);
      const arrayFilmsID = await data.results.map(film => film.id);
      let ArrayFilmID = [];

      for (let i = 0; i < arrayFilmsID.length; i++) {
        let objectByFilmID = await this.fetchFilmByID(arrayFilmsID[i]);
        let someArray = objectByFilmID.production_countries.some(
          country => country.iso_3166_1 === this.country,
        );

        if (someArray) {
          ArrayFilmID.push(objectByFilmID);
        }
      }

      console.log("log in method 'fetchFilmDiscoverWithCountry': ", ArrayFilmID);
      return ArrayFilmID;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchFilmByID(filmID) {
    try {
      const urlByID = `${this.url}movie/${filmID}?api_key=${this.key}&language=${this.language}`;
      let { data } = await axios.get(urlByID);
      //console.log("log in method 'fetchFilmByID': ", data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchFilmByQuery() {
    const urlByQuery = `${this.url}search/movie?api_key=${this.key}&language=${this.language}&query=${this.query}&page=${this.page}`;
    try {
      let { data } = await axios.get(urlByQuery);
      console.log("log in method 'fetchFilmByQuery': ", data.results);

      return data.results;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchFilmTrends() {
    const urlTrends = `${this.url}trending/movie/${this.trends_type}?api_key=${this.key}&page=${this.page}`;
    try {
      let { data } = await axios.get(urlTrends);
      // console.log(data.production_countries);
      console.log("log in method 'fetchFilmTrends': ", data);

      return data.results;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchFilmUpcoming() {
    const urlUpcoming = `${this.url}movie/upcoming?api_key=${this.key}&language=${this.language}&page=${this.page}`;
    try {
      let { data } = await axios.get(urlUpcoming);
      // console.log(data.production_countries);
      console.log("log in method 'fetchFilmUpcoming': ", data.results);

      return data.results;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchFilmGenres() {
    const urlGengres = `${this.url}genre/movie/list?api_key=${this.key}`;
    try {
      let { data } = await axios.get(urlGengres);

      console.log("log in method 'fetchFilmGenres': ", data.genres);

      return data.genres;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchFilmCountries() {
    const urlCountries = `${this.url}configuration/countries?api_key=${this.key}`;
    try {
      let { data } = await axios.get(urlCountries);

      console.log("log in method 'fetchFilmCountries': ", data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  get getYear() {
    return this.year;
  }

  set setYear(year) {
    this.year = year;
  }

  get getPage() {
    return this.page;
  }

  set setPage(numpage) {
    this.page = numpage;
  }

  get getGenre() {
    return this.genre;
  }

  set setGenre(genre) {
    this.genre = genre;
  }

  get getCountry() {
    return this.country;
  }

  set setCountry(country) {
    this.country = country;
  }

  get getLang() {
    return this.language;
  }

  set setLang(language) {
    this.language = language;
  }

  get getID() {
    return this.id;
  }

  set setID(id) {
    this.id = id;
  }

  get getQuery() {
    return this.query;
  }

  set setQuery(query) {
    this.query = query;
  }

  get getTrendsType() {
    return this.trends_type;
  }

  set setTrendsType(trends_type) {
    this.trends_type = trends_type;
  }
}

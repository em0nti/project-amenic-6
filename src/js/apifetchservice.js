/// test
import axios from 'axios';

export default class ApiFetchService {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this.key = '91ae85947dca7203ec2b4d7841a3c73b';
    this.film = 'King';
    this.year = 2001;
    this.genre = 'Action';
    this.country = 'US';
    this.page = 148;
    this.region = 'US';
    this.language = 'en-US';
    this.id = 157336;
    this.query = 'cat';

    // country or region ???
  }

  async fetchFilmList() {
    try {
      const url = `${this.url}search/movie?api_key=${this.key}&query=${this.film}&primary_release_year=${this.year}&page=${this.page}&region=${this.region}`;
      let { data } = await axios.get(url);
      return data.results;
    } catch (error) {}
  }

  //   async fetchFilmDiscoverWithoutCountry() {
  //     const url = `${this.url}discover/movie?api_key=${this.key}&language=${this.language}&with_genres=${this.genre}&primary_release_year=${this.year}`;
  //     let { data } = await axios.get(url);
  //     // let dataResults = data.results;
  //     // // let dataFiltered = dataResults.filter(film => film.original_language === 'US');
  //     // let dataFiltered = dataResults.map(filmId => filmId.id);

  //     // console.log(dataFiltered);

  //     return data.results;
  //   }

  async fetchFilmDiscoverWithCountry() {
    const urlWithParams = `${this.url}discover/movie?api_key=${this.key}&language=${this.language}&with_genres=${this.genre}&primary_release_year=${this.year}`;

    try {
      let { data } = await axios.get(urlWithParams);
      // const dataWithOutCountry = await this.fetchFilmDiscoverWithoutCountry();
      // console.log(dataWithOutCountry);
      //   const arrayFilmsID = await dataWithOutCountry.map(film => film.id);
      const arrayFilmsID = await data.results.map(film => film.id);
      //   console.log(arrayFilmsID);
      // console.log(arrayFilmsID.length);
      let ArrayFilmID = [];
      for (let i = 0; i < arrayFilmsID.length; i++) {
        const element = arrayFilmsID[i];
        let objectByFilmID = await this.fetchFilmByID(element);
        //   console.dir(objectByFilmID.production_countries);
        //   console.log('dedew', Object.values(xxx.production_countries));
        //   ArrayFilmID.[element] = xxx;
        let someArray = objectByFilmID.production_countries.some(
          country => country.iso_3166_1 === this.country,
        );
        //   console.log('somearray', someArray);

        if (someArray) {
          ArrayFilmID.push(objectByFilmID);
        }
      }

      //   console.log(ArrayFilmID);
      return ArrayFilmID;
    } catch (error) {
      console.log(error.message);
    }
  }

  async fetchFilmByID(filmID) {
    try {
      const urlByID = `${this.url}movie/${filmID}?api_key=${this.key}&language=${this.language}`;
      let { data } = await axios.get(urlByID);
      // console.log(data.production_countries);
      // console.log(data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchFilmByQuery() {
    const urlByQuery = `${this.url}search/movie?api_key=${this.key}&language=${this.language}&query=${this.query}&page=${this.page}`;
    try {
      let { data } = await axios.get(urlByQuery);
      // console.log(data.production_countries);
      console.log(data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  get getFilm() {
    return this.film;
  }

  set setFilm(title) {
    this.film = title;
  }

  get getYear() {
    return this.year;
  }

  set setYear(year) {
    this.year = year;
  }

  get getNumeOfPage() {
    return this.page;
  }

  set setNumOfPage(numpage) {
    this.page = numpage;
  }

  get getGenre() {
    return this.genre;
  }

  set setGenre(genre) {
    this.genre = genre;
  }

  get getRegion() {
    return this.region;
  }

  set setRegion(region) {
    this.region = region;
  }
}

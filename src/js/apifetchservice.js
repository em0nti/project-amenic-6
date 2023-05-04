import axios from 'axios';

export default class ApiFetchService {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this.key = '91ae85947dca7203ec2b4d7841a3c73b';
    // this.film = 'King';
    this.year = 2001;
    this.genre = 'Action';
    this.country = 'US';
    this.page = 1;
    this.region = 'US';
    this.language = 'en-US';
    this.id = 157336;
    this.query = '';
    this.trends_type = 'day';
  }

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
      console.log(data.results);

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
      console.log(data);

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
      console.log(data.results);

      return data.results;
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

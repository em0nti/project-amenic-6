import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
export default class TrendsApi {
  constructor() {
    this.trendsType = '';
    this.page = 1;
    //this.form;
  }
  async fetchWeeklyCards() {
    const url = `https://api.themoviedb.org/3/trending/movie/${this.trendsType}?api_key=91ae85947dca7203ec2b4d7841a3c73b&page=${this.page}`;

    try {
      const response = await axios.get(url);
      if (response.data.results.length === 0) {
        Notify.failure('Sorry, there are no more movies available');
        throw new Error(error.message);
      }
      this.page += 1;
      console.log(response.data);

      return response.data.results;
    } catch (error) {
      console.log('закончились фильмы');
    }
  }
  get getTrendsType() {
    return this.trendsType;
  }
  set setTrendsType(type) {
    // this.page = 1;
    this.trendsType = type;
  }
}

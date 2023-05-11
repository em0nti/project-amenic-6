import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
export default class TrendsApi {
  constructor() {
    this._trendsType = '';
    this.page = 1;
    this.form;
  }
  async fetchMovieCards() {
    const url = 'https://api.themoviedb.org/3/trending/movie';
    const axiosParams = {
      params: {
        api_key: '91ae85947dca7203ec2b4d7841a3c73b',
        trendsType: this.trendsType,
        page: this.page,
      },
    };
    // try {
    //   const response = await axios.get(url, axiosParams);
    //   // console.log(response.data.results);
    //   if (response.data.results.length === 0) {
    //     Notify.failure('Sorry, there are no more movies available');
    //     throw new Error(error.message);
    //   }
    //   this.page += 1;
    //   return response.data.results;
    // } catch (error) {
    //   // this.searchQuery = "";
    //   console.log('закончились фильмы');
    //   // throw "stop";
    // }
  }
  get trendsType() {
    return this._trendsType;
  }
  set trendsType(type) {
    // this.page = 1;
    this._trendsType = type;
  }
}
// function encodeQuery(searchQuery) {
//     return encodeURIComponent(searchQuery).replace(/%20/g, "+");
// };

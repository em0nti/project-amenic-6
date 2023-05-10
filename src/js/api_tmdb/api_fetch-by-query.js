import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
export default class TmdbApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.form;
    }
    async fetchMovieCards() {
        const url = 'https://api.themoviedb.org/3/search/movie'; 
        const axiosParams = {
            params: {
            api_key: "91ae85947dca7203ec2b4d7841a3c73b",
            query: encodeQuery(this.searchQuery),
            page: this.page,
            }
        
        };
        try {
            const response = await axios.get(url, axiosParams);
            console.log(response.data.results.length);
            if (response.data.results.length === 0) {
                Notify.failure("Sorry, there are no more movies available");
                throw new Error(error.message);
                }
            this.page += 1;            
            return response.data.results;
        } catch (error) {
            // this.searchQuery = "";
            console.log("закончились фильмы");
            // throw "stop";
         }
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {      
        this.page = 1;
        this.searchQuery = newQuery;
     }
};
function encodeQuery(searchQuery) {
    return encodeURIComponent(searchQuery).replace(/%20/g, "+");
};

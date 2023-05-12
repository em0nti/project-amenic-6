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
            query: this.searchQuery,
            page: this.page,
            }
        
        };
        try {
            const response = await axios.get(url, axiosParams);
            if (response.data.results.length === 0) {
                throw new Error(error.message);
                }
            this.page += 1;            
            return response.data.results;
        } catch (error) {
            renderSearchFail();
            console.log("закончились фильмы");
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
// function encodeQuery(searchQuery) {
//     return encodeURIComponent(searchQuery).replace(/%20/g, "+");
// };

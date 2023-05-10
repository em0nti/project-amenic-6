import axios from 'axios';
export default class tmdbApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.form;
    }
    async fetchMovieCards() {
        const url = 'https://api.themoviedb.org/3/'; 
        const axiosParams = {
            params: {
            api_key: "91ae85947dca7203ec2b4d7841a3c73b",
            query: encodeQuery(this.searchQuery),
            page: this.page,
            }
        
        };
        console.log(params);
        try {
            const response = await axios.get(url, axiosParams);   
            console.log(response);
            // if (response.data.hits.length === 0) {
            //     Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            //     throw new Error(response)
            //     };
            // if (totalPages === this.page) {
            //     Notify.warning("We're sorry, but you've reached the end of search results.");
            //    ButtonLoadMore.disable();
            // }
            // Notify.info(`Hooray! We found ${response.data.totalHits} images on ${totalPages} pages. Current page: ${this.page}`);
            //     this.page += 1;            
                return response;
        } catch (error) {
            this.searchQuery = "";
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

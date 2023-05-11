import axios from 'axios';
export default class TmdbApiGenresNames {
    constructor() {
        this.genres = [];
    }
    async getGenresNames() {
        const url = 'https://api.themoviedb.org/3/genre/movie/list'; 
        const axiosParams = {
            params: {
                api_key: "91ae85947dca7203ec2b4d7841a3c73b",
            }
        };
        try {
            const response = await axios.get(url, axiosParams);
            // console.log(response.data.genres);
            this.genres = response.data.genres;
            return response.data.genres;
        } catch (error) {
            console.log(error.message);

         }
    }
};

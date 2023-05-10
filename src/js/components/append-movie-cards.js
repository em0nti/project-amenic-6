// import TmdbApi from "../api_tmdb/api_fetch-by-query";
import renderCards from './render-cards';
import { tmdbApi } from './tmdbApi'

export default async function appendMovieCards() {
    try {
        renderCards(await tmdbApi.fetchMovieCards());
    } catch (error) {
        console.log("ошибка в appendMovieCards",error);
     }
};
import { tmdbApi } from './components/tmdbApi';
import { genresNames } from './components/genresListNames';

console.log("🚀 ~ tmdbApi:", tmdbApi)
console.log("🚀 ~ genresNames:", genresNames)

import scrollToTop from './components/scroll-to-top';
import intersection from './components/infinite-scroll'
import appendMovieCards from './components/append-movie-cards';
import clearPage from "./components/clear-page";


const refs = {
    bodyRef: document.querySelector('body'),
    formRef: document.querySelector('.search-form'),
    inputRef: document.querySelector('input'),
    cardSetRef: document.querySelector('.card-set'),
}

refs.formRef.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

    tmdbApi.form = refs.formRef;
    tmdbApi.query = event.currentTarget.elements.query.value.trim();

    handleSearch(tmdbApi.query);
}; 
async function handleSearch() {
    try {
    if (tmdbApi.query === "") {
    throw new Error()
    }
    clearPage();
    await appendMovieCards()    
    scrollToTop();
    intersection()    
    } catch (error) {
        console.log(error.message);
        
    }
}

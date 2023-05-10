import tmdbApi from "./api_tmdb/api_fetch-by-query";

const refs = {
    bodyRef: document.querySelector('body'),
    formRef: document.querySelector('.search-form'),
    inputRef: document.querySelector('input'),
    cardSetRef: document.querySelector('.card-set'),
}

const tmdbApi = new tmdbApi();

refs.formRef.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

    tmdbApi.form = refs.formRef;
    tmdbApi.query = event.currentTarget.elements.query.value.trim();

    console.log("🚀 ~ onSearch ~ tmdbApi.query:", tmdbApi.query)

    console.log(tmdbApi.fetchCards());

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
    // intersection()    
    } catch (error) {
        console.log(error.message);
        return;     
    }
}
async function appendMovieCards() {
    try {
        const movieCards = await tmdbApi.fetchMovieCards();
        console.log(movieCards);
        renderCards(movieCards);
    } catch (error) {
        console.log(error);
     }
}
function renderCards(cards) {
    refs.cardSetRef.insertAdjacentHTML('beforeend', createMarkup(cards));
};
function scrollToTop() {
    scrollTo({
        top: 0,
        behavior:"smooth"
    })
}
function clearPage() {
    refs.cardSetRef.innerHTML = '';
}
import createSearchFailMarkup from "./search-fail-markup";
const refs = {
    placeToInsert: document.querySelector('.search-form__fail-search')
}
export default function renderSearchFail() {
    refs.placeToInsert.innerHTML = createSearchFailMarkup();
};
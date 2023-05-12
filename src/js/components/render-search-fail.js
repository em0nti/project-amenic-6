import createSearchFailMarkup from "./search-fail-markup";
const refs = {
    placeToInsert: document.querySelector('.search-form-container')
}
export default function renderSearchFail() {
    console.log("-------------------", refs.placeToInsert);
    refs.placeToInsert.insertAdjacentHTML('beforeend', createSearchFailMarkup());
};
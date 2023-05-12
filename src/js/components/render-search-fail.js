import createSearchFailMarkup from "./search-fail-markup";
const refs = {
    placeToInsert: document.querySelector('.card-set')
}
export default function renderSearchFail() {
    
    refs.placeToInsert.innerHTML = "";

    console.log("🚀 ~ renderSearchFail ~ refs.placeToInsert:", refs.placeToInsert)

    refs.placeToInsert.innerHTML = createSearchFailMarkup();
};
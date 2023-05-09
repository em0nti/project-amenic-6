// import initChoices from './search-styling';
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import initModals from './modals/init-modals';
import { refs } from './constants';

initModals();
// initChoices();

const form = document.querySelector('#search-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.input.value;
  console.log(searchQuery);
});

console.log('catalog.js is loaded', form);
// function onSearchSubmit(event) {
//   event.preventDefault();
//   console.log(refs.form.input.value);
// }

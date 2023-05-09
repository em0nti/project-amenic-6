// import initChoices from './search-styling';
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import initModals from './modals/init-modals';
import { refs } from './constants';

initModals();
// initChoices();
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(refs.form.input.value);
});

// function onSearchSubmit(e) {
//   e.preventDefault();
//   console.log(refs.form.input.value);
// }

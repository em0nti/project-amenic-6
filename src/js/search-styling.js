import Choices from 'choices.js';

const searchRefs = {
  year: document.querySelector('[data-year]'),
  genre: document.querySelector('[data-genre]'),
  country: document.querySelector('[data-country]'),
};

// const makeChoises = refs => {
//   const keys = Object.keys(refs);
//   const datasetValues = [];
//   keys.forEach(key => {
//     datasetValues.push(searchRefs.[key])
//   });
// };

const defaultChoicesOptions = {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
};

const choicesOptions2 = {
  ...defaultChoicesOptions,
  classNames: {
    containerOuter: 'choices choices-year',
    // addItems: false,
  },
};

const choicesOptions3 = {
  ...defaultChoicesOptions,
  classNames: {
    containerOuter: 'choices choices-genre',
  },
};

const choicesOptions4 = {
  ...defaultChoicesOptions,
  classNames: {
    containerOuter: 'choices choices-country',
  },
};

// const choisesInput = new Choices(searchRefs.input, choicesOptions1);
const initChoices = () => {
  const choicesYear = new Choices(searchRefs.year, choicesOptions2);
  const choicesGenre = new Choices(searchRefs.genre, choicesOptions3);
  const choicesCountry = new Choices(searchRefs.country, choicesOptions4);
  console.log(choicesYear);
  return [choicesYear, choicesGenre, choicesCountry];
};

export default initChoices;

import Choices from 'choices.js';

const searchRefs = {
  input: document.querySelector('[data-input]'),
  year: document.querySelector('[data-year]'),
  genre: document.querySelector('[data-genre]'),
  country: document.querySelector('[data-country]'),
};

const choicesOptions1 = {
  searchEnabled: false,
  shouldSort: false,
  classNames: {
    containerOuter: 'choices choices-input',
    // addItems: false,
  },
  editItems: true,
};

const choicesOptions2 = {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices choices-year',
    // addItems: false,
  },
};

const choicesOptions3 = {
  searchEnabled: false,
  shouldSort: true,
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices choices-genre',
  },
};

const choicesOptions4 = {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices choices-country',
  },
};

// const choisesInput = new Choices(searchRefs.input, choicesOptions1);
const choicesYear = new Choices(searchRefs.year, choicesOptions2);
const choicesGenre = new Choices(searchRefs.genre, choicesOptions3);
const choicesCountry = new Choices(searchRefs.country, choicesOptions4);

//Create multiple choises fron searchRefs

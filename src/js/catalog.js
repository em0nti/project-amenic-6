import Choices from 'choices.js';

const searchRefs = {
  input: document.querySelector('#input'),
  year: document.querySelector('#select-year'),
  genre: document.getElementById('#select-genre'),
  country: document.querySelector('#select-country'),
};

const choisesInput = new Choices(searchRefs.input);
const choicesYear = new Choices(searchRefs.year);

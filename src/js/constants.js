export const refs = {
  addToLibraryBtn: document.getElementById('add-to-library-btn'),
  remindMeBtn: document.getElementById('remind-btn'),
  getSartedBtn: document.getElementById('get-started-btn'),
  sectionGallery: document.querySelector('.library__movi-card-list'),
  sectionWeeklyTrends: document.querySelector('.weekly-trends__movi-list'),
  sectionUpcoming: document.querySelector('.upcoming'),
  //sectionHeroDayTrends: document.querySelector('.hero-home'), //uncomment this section after adding hero-home.html
  //modals
  // example
  modalTrailerOk: document.getElementById('trailer-ok'),
  modalTrailerNotOk: document.getElementById('trailer-not-ok'),
  watchTrailerBtn: document.getElementById('watch-trailer-btn'),
  sectionHeroDayTrends: document.querySelector('.hero'),
  modalPopUp: document.querySelector('#modal-pop-up'),
  cards: document.querySelector('.js-cards'),
  popUpModal: document.querySelector('.popup-modal-win'),

  sectionCatalogCardSet: document.querySelector('.catalog__movi-catalog-list'),

  //Forms
  form: document.querySelector('#search-form'),
};

export const state = {
  activeCard: { id: null },
  homeHero: { id: null },
  catalogHero: { id: null },
};

//this is class for fetching data
import ApiFetchService from './api_fetch_service';
import ApiMarkupService from './api_markup_service';
import { refs, state } from './constants';
import { onWatchTrailerClick } from './watch-trailer';
import { onClickAddToLibrary } from './buttons/remind-me';
import { Notify } from 'notiflix';
import { switchTheme } from './theme';
import { state } from './constants';

// create instance 'apiFetchService' for using in functions
const apiFetchService = new ApiFetchService();
const apiMarkupService = new ApiMarkupService();

//function to markup film by search query
export async function markupFilmByQuery(searchQuery) {
  try {
    apiFetchService.setQuery = await searchQuery;
    await apiFetchService.fetchFilmGenres();
    await apiFetchService.fetchFilmByQuery();

    const dataFromQuery = await apiFetchService.getFilmsByQuery;

    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    apiMarkupService.setFilmsForMarkup = await dataFromQuery;

    const filmMarkUp = await apiMarkupService.markupGallery();

    return filmMarkUp;
  } catch (error) {
    console.log(error);
  }
}
// function to markup weekly trends film
export async function markUpWeeklyTrends(numOfArray) {
  try {
    apiFetchService.setTrendsType = 'week';
    await apiFetchService.fetchFilmGenres();
    await apiFetchService.fetchFilmTrends();
    const dataFromTrends = await apiFetchService.getFilmsTrends;
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;

    apiMarkupService.setFilmsForMarkup = await dataFromTrends;
    const filmMarkUp = await apiMarkupService.markupGallery(numOfArray);

    return filmMarkUp;
  } catch (error) {
    console.log(error);
  }
}
// function to markup day trends film
export async function markUpDayTrends(posterType) {
  try {
    const filmArrayIDtoMarkup = getRandomInt(18);
    apiFetchService.setTrendsType = 'day';
    await apiFetchService.fetchFilmGenres();
    await apiFetchService.fetchFilmTrends();
    const dataFromTrends = await apiFetchService.getFilmsTrends;
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    apiMarkupService.setFilmsForMarkup = await dataFromTrends[filmArrayIDtoMarkup];
    const filmDataFormMarkup = apiMarkupService.getFilmsForMarkup;
    const filmMarklUp = await apiMarkupService.markupFilmHeroTrendsDay(filmDataFormMarkup);

    refs.sectionHeroDayTrends.innerHTML = filmMarklUp;

    const backGroundPoster = document.querySelector('.hero');

    if (posterType === 'backdrop') {
      const backGroundPosterPath = filmDataFormMarkup.backdrop_path;
      backGroundPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${backGroundPosterPath}')`;
    } else if (posterType === 'poster') {
      const backGroundBackdropPath = filmDataFormMarkup.poster_path;
      backGroundPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${backGroundBackdropPath}')`;
    }

    const buttonTrailer = document.querySelector('#watch-trailer-btn');
    const FilmID = filmDataFormMarkup.id;
    buttonTrailer.addEventListener('click', () => {
      onWatchTrailerClick(FilmID);
    });
    switchTheme(1);
  } catch (error) {
    console.log(error);
  }
}
//function to markup film by ID .Usage for PopUpfilm card
export async function markupFilmByID(ID) {
  try {
    await apiFetchService.fetchFilmGenres();
    const dataFilmFromID = await apiFetchService.fetchFilmByID(ID);
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    const markupFilmByID = await apiMarkupService.markupFilmCardByID(dataFilmFromID);
  } catch (error) {
    console.log(error);
  }
}
//function to markup films by array od ID's. like [809,808,766] etc. Usage for my Library
export async function markupFilmByIDArray(arrayID) {
  try {
    await apiFetchService.fetchFilmGenres();
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    apiFetchService.setFilmsIDArray = arrayID;
    await apiFetchService.fetchFilmByIDArray();
    apiMarkupService.setFilmsForMarkup = apiFetchService.getFilmsArrayByID;
    const filmMarklUp = await apiMarkupService.markupGalleryByID();
    document.querySelector('.library__movi-card-list').innerHTML = filmMarklUp;
    refs.sectionGallery.insertAdjacentHTML('beforeend', filmMarklUp);

    return filmMarklUp;
  } catch (error) {
    console.log(error);
  }
}
//function to markup filmUpcoming with randomizer
export async function markupFilmUpcoming(posterType = null) {
  try {
    const filmArrayIDtoMarkup = getRandomInt(18);
    await apiFetchService.fetchFilmGenres();
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    const dataFilmUpcoming = await apiFetchService.fetchFilmUpcoming();
    const dataFilmUpcomingForMarkup = await dataFilmUpcoming[filmArrayIDtoMarkup];

    refs.sectionUpcoming.innerHTML = apiMarkupService.markupFilmCardUpcoming(
      dataFilmUpcomingForMarkup,
      posterType,
    );
    document.getElementById('remind-btn').addEventListener('click', e => {
      e.preventDefault();
      const cardStorage = state.cardStorage;
      if (!cardStorage.hasCardId(dataFilmUpcomingForMarkup.id)) {
        cardStorage.addCardId(dataFilmUpcomingForMarkup.id);
        Notify.success('The film added into your Library');
      } else {
        Notify.info('The film already in your Library');
      }
    });
    return dataFilmUpcomingForMarkup.id;
  } catch (error) {
    console.log(error);
  }
}
//function to get random integer
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export async function onChangeWeeklyTrendsByScreenWidth(blockInnerHTML, pageNum) {
  try {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768 && pageNum === 3) {
      markUpWeeklyTrends(1)
        .then(data => {
          blockInnerHTML.innerHTML = data;
        })
        .catch(err => console.log(err));
      await markUpDayTrends('poster');
      return;
    }
    if (screenWidth >= 768 && pageNum === 3) {
      markUpWeeklyTrends(3)
        .then(data => {
          blockInnerHTML.innerHTML = data;
        })
        .catch(err => console.log(err));
      await markUpDayTrends('backdrop');
      return;
    }
    if (pageNum === 12) {
      markUpWeeklyTrends(12)
        .then(data => {
          blockInnerHTML.innerHTML = data;
        })
        .catch(err => console.log(err));
      await markUpDayTrends('poster');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function onChangemarkupFilmUpcomingsByScreenWidth(blockInnerHTML, pageNum) {
  try {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      await markupFilmUpcoming('poster');
      return;
    }
    if (screenWidth >= 768 && pageNum === 3) {
      await markupFilmUpcoming('backdrop');
    }
  } catch (error) {
    console.log(error);
  }
}
export async function onShowPopUpModal(ID) {
  try {
    await apiFetchService.fetchFilmGenres();
    const dataFilmFromID = await apiFetchService.fetchFilmByID(ID);
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    const markupFilmByID = apiMarkupService.markupFilmCardPopUpByID(dataFilmFromID);

    refs.popUpModal.innerHTML = markupFilmByID;

    return ID;
  } catch (error) {
    console.log(error);
  }
}

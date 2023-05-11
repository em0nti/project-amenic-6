import { refs } from './constants.js';
import { markUpDayTrends, markupFilmUpcoming, markUpWeeklyTrends } from './functions.js';

export async function onChangeWeeklyTrendsByScreenWidth(blockInnerHTML, pageNum) {
  try {
    let screenWidth = window.innerWidth;
    console.log(pageNum);
    console.log('current Width Screen in px is: ', screenWidth);
    if (screenWidth < 768 && pageNum === 3) {
      markUpWeeklyTrends(1)
        .then(data => {
          // console.log(blockInnerHTML);
          blockInnerHTML.innerHTML = data;
        })
        .catch(err => console.log(err));
      await markUpDayTrends('poster');
      return;
    }
    if (screenWidth >= 768 && pageNum === 3) {
      markUpWeeklyTrends(3)
        .then(data => {
          console.log(blockInnerHTML);
          blockInnerHTML.innerHTML = data;
        })
        .catch(err => console.log(err));
      await markUpDayTrends('poster');
      return;
    }
    if (pageNum === 10) {
      markUpWeeklyTrends(10)
        .then(data => {
          console.log(blockInnerHTML);
          blockInnerHTML.innerHTML = data;
        })
        .catch(err => console.log(err));
      await markUpDayTrends('poster');
    }

    // else {
    //   markUpWeeklyTrends(pageNum)
    //     .then(data => {
    //       console.log(blockInnerHTML);
    //       blockInnerHTML.innerHTML = data;
    //     })
    //     .catch(err => console.log(err));
    //   markUpDayTrends('backdrop');
    //   markupFilmUpcoming('backdrop');
    //   return;
    // }
  } catch (error) {
    console.log(error);
  }
}

export async function onChangemarkupFilmUpcomingsByScreenWidth(blockInnerHTML, pageNum) {
  try {
    let screenWidth = window.innerWidth;
    console.log(pageNum);
    console.log('current Width Screen in px is: ', screenWidth);
    if (screenWidth < 768) {
      markupFilmUpcoming('poster');
      return;
    }
    if (screenWidth >= 768 && pageNum === 3) {
      markupFilmUpcoming('backdrop');
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function onShowPopUpModal(ID) {
  try {
    await apiFetchService.fetchFilmGenres();
    let dataFilmFromID = await apiFetchService.fetchFilmByID(ID);
    apiMarkupService.setGenresAll = await apiFetchService.getGenresAll;
    // console.log(refs.popUpModal);
    // apiMarkupService.setFilmsForMarkup = await dataFilmFromID;
    let markupFilmByID = apiMarkupService.markupFilmCardPopUpByID(dataFilmFromID);
    // console.log(markupFilmByID);

    refs.popUpModal.innerHTML = markupFilmByID;
  } catch (error) {
    console.log(error);
  }
}
import Notiflix from 'notiflix';

import { refs, state } from '../constants';
import { save, load } from '../local-storage-service';

const STORAGE_KEY = 'movie-id';
let id = state.activeCard.id;

export function onClickAddToLibrary(ID) {
  console.log('Our ID: ', ID);
  addIdArrToStorage(ID);

  // ф-я яка завантажує дані в локал сторадж

  function addIdArrToStorage(id) {
    const storageValue = load(STORAGE_KEY);
    console.log(storageValue);
    if (storageValue === undefined) {
      // створюю масив і додаю перший єл-т і додаю в локал
      const idArr = [id];
      save(STORAGE_KEY, idArr);
    } else if (verifycontainsId(storageValue, id)) {
      //первіряємо якщо id вже є повідомлення і виходимо
      Notiflix.Notify.info('You alredy have this movie in the library');
      // console.log("вже маємо")
    } else {
      // до вже існуючго масиву додаємо значення
      storageValue.push(id);
      save(STORAGE_KEY, storageValue);
    }

    console.log(storageValue);
  }

  function verifycontainsId(arr, x) {
    return arr.includes(x);
  }
}

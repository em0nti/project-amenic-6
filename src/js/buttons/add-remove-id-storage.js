import { refs, state } from '../constants';

import { save, load, remove } from '../local-storage-service';
// import ApiFetchService from '../api_fetch_service';

// console.log(activeCardState);
const STORAGE_KEY = 'movie-id';

let id = state.activeCard.id;

//? перевіряємо чи є фільм з таким id в локал сторадж, якщо є змінюю назву кнопки
let storageValue = showStorageValue(STORAGE_KEY);
// console.log(storageValue);
// if (storageValue !== undefined && verifycontainsId(storageValue, id)) {
//     renamBtnToRemove();
// }

function verifyIdOnCardOpen(id) {
  // let storageValue = showStorageValue(STORAGE_KEY);
  console.log(storageValue);
  if (storageValue !== undefined && verifyContainsId(storageValue, id)) {
    renamBtnToRemove();
  }
}

verifyIdOnCardOpen(id);


// функція яка по натисканню кнопки додає значення в масив

function onClickAddRemoveFromLibrary() {
  // id = 1555
  // id = Number(e.currentTarget.dataset.id)

  console.log('Our ID: ', id);

  addIdArrToStorage(id);
}


// ф-я яка завантажує дані в локал сторадж

function addIdArrToStorage(id) {

  if (storageValue === undefined) {
    // створюю масив і додаю перший єл-т і додаю в локал
    const idArr = [id];
    save(STORAGE_KEY, id);
    renameBtnToRemove();
  } else if (verifyContainsId(storageValue, id)) {
    //первіряємо якщо id вже є повідомлення і виходимо
    remove(STORAGE_KEY, id);
    renameBtnToAdd();
    storageValue = showStorageValue(STORAGE_KEY);
  } else {
    // до вже існуючго масиву додаємо значення
    storageValue.push(id);
    save(STORAGE_KEY, storageValue);
    renameBtnToRemove();
    storageValue = showStorageValue(STORAGE_KEY);
  }
}

// ф-я перевіряє чи є id в storage
function verifyContainsId(arr, id) {
  return hasId = arr.includes(id);
}

function renameBtnToRemove() {
  refs.addToLibraryBtn.textContent = 'Remove from my library';
}

function renameBtnToAdd() {
  refs.addToLibraryBtn.textContent = 'Add to my library';
}

function showStorageValue(STORAGE_KEY) {
  return load(STORAGE_KEY);
}

export { verifyIdOnCardOpen, onClickAddRemoveFromLibrary, showIdOnCardClick };
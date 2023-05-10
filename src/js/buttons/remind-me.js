import Notiflix from 'notiflix';

import { save, load } from "../local-storage-service";

const STORAGE_KEY = 'movie-id';
// функція яка по натисканню кнопки додає значення в масив

function onClickAddToLibrary(e) {
    const id = Number(e.currentTarget.dataset.id)
    console.log('Our ID: ', id)
    addIdArrToStorage(id);
}


// ф-я яка завантажує дані в локал сторадж

function addIdArrToStorage(id) {

    const storageValue = load(STORAGE_KEY);
    if (storageValue === undefined) {
        // створюю масив і додаю перший єл-т і додаю в локал
        const idArr = [id];
        save(STORAGE_KEY, idArr);
    } else if (verificationsId(storageValue, id)) {
        //первіряємо якщо id вже є повідомлення і виходимо
        Notiflix.Notify.info('You already have this movie in the library')
    } else {
        // до вже існуючго масиву додаємо значення
        storageValue.push(id);
        save(STORAGE_KEY, storageValue)
    }

    console.log(storageValue);
};

function verificationsId(arr, x) {
        return hasId = arr.includes(x);
};

export default onClickAddToLibrary;
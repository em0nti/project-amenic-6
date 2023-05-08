import Notiflix from 'notiflix';

import { refs } from "../constants";
import { save, load } from "../local-storage-service";
import ApiFetchService from '../api_fetch_service';

const STORAGE_KEY = 'movie-id';
const apiFetchService = new ApiFetchService();
const id = apiFetchService.getID;

refs.remindMeBtn.addEventListener('click', onClickAddToLibrary);


// функція яка по натисканню кнопки додає значення в масив

function onClickAddToLibrary() {
    addIdArrToStorage(id);
}


// ф-я яка завантажує дані в локал сторадж

function addIdArrToStorage(id) {

    const storageValue = load(STORAGE_KEY);
    if (storageValue === undefined) {
        // створюю масив і додаю перший єл-т і додаю в локал
        const idArr = [id];
        save(STORAGE_KEY, idArr);
    } else if (verifycontainsId(storageValue, id)) {
        //первіряємо якщо id вже є повідомлення і виходимо 
        Notiflix.Notify.info('You alredy have this movie in the library')
    } else {
        // до вже існуючго масиву додаємо значення
        storageValue.push(id);
        save(STORAGE_KEY, storageValue)
    }

    console.log(storageValue);
};

function verifycontainsId(arr, x) {
        return hasId = arr.includes(x); 
};
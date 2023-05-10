import Notiflix from 'notiflix';

import { refs, state} from "../constants";
import { save, load } from "../local-storage-service";


const STORAGE_KEY = 'movie-id';
let id = state.activeCard.id;




// ! вішав на боді
// const body = document.body
// console.log(body)
// body.addEventListener('click', onClickAddToLibrary);
// function onClickAddToLibrary(e) {
//     console.log(e.target);
// }

refs.remindMeBtn.addEventListener('click', onClickAddToLibrary);



// функція яка по натисканню кнопки додає значення в масив

export function onClickAddToLibrary() {
    const id = e.currentTarget.dataset.id;
    
    console.log('Our ID: ', id)
    addIdArrToStorage(id);
}


// ф-я яка завантажує дані в локал сторадж

function addIdArrToStorage(id) {

    const storageValue = load(STORAGE_KEY);
    console.log(storageValue)
    if (storageValue === undefined) {
        // створюю масив і додаю перший єл-т і додаю в локал
        const idArr = [id];
        save(STORAGE_KEY, idArr);
    } else if (verifycontainsId(storageValue, id)) {
        //первіряємо якщо id вже є повідомлення і виходимо
        // Notiflix.Notify.info('You alredy have this movie in the library')
        console.log("вже маємо")
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
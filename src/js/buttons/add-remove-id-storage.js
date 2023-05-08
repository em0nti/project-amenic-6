
import { refs } from "../constants";
import { save, load, remove } from "../local-storage-service";
import ApiFetchService from '../api_fetch_service';


const STORAGE_KEY = 'movie-id';
const apiFetchService = new ApiFetchService();
const id = apiFetchService.getID;

refs.addToLibraryBtn.addEventListener('click', onClickAddRemoveFromLibrary);




// перевіряємо чи є фільм з таким id в локал сторадж, якщо є змінюю назву кнопки
let storageValue = showStorageValue(STORAGE_KEY);
console.log(storageValue);
if (storageValue !== undefined && verifycontainsId(storageValue, id)) {
    renamBtnToRemove();
}


// функція яка по натисканню кнопки додає значення в масив

function onClickAddRemoveFromLibrary() { 
    addIdArrToStorage(id);
}


// ф-я яка завантажує дані в локал сторадж

function addIdArrToStorage(id) {

    if (storageValue === undefined) {
        // створюю масив і додаю перший єл-т і додаю в локал
        const idArr = [id];
        save(STORAGE_KEY, id);
        renamBtnToRemove();
    } else if (verifycontainsId(storageValue, id)) {
        //первіряємо якщо id вже є повідомлення і виходимо 
        remove(STORAGE_KEY, id);
        renamBtnToAdd();
        storageValue = showStorageValue(STORAGE_KEY);
    } else {
        // до вже існуючго масиву додаємо значення
        storageValue.push(id);
        save(STORAGE_KEY, storageValue);
        renamBtnToRemove();
        storageValue = showStorageValue(STORAGE_KEY);
    };

    console.log(storageValue);
}

// ф-я перевіряє чи є id в storage
function verifycontainsId(arr, id) {
        return hasId = arr.includes(id);
}

// 
function renamBtnToRemove() {
    refs.addToLibraryBtn.textContent = 'Remove from my library';
}
function renamBtnToAdd() {
    refs.addToLibraryBtn.textContent = 'Add to my library';
}

function showStorageValue(STORAGE_KEY) {
    return load(STORAGE_KEY);
}
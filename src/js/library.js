import { currentPage } from './show-current-page';
import { refs } from './constants';
import { onCardClick } from './card-handler';
import { openModal } from './modals/open-close-modals';

import { save, load, remove } from "./local-storage-service";
import {verifyIdOnCardOpen,  onClickAddRemoveFromLibrary, showIdOnCardClick} from "./buttons/add-remove-id-storage"

initModals();

currentPage();

refs.cards.addEventListener('click', onCardClick);

// Функціонал Тимченко
// refs.addToLibraryBtn.addEventListener('click', onClickAddRemoveFromLibrary);
// refs.cards.addEventListener('click', showIdOnCardClick);


// const STORAGE_KEY = 'movie-id';
//  id = showIdOnCardClick()
// let id = activeCardState.id;

// console.log(id)

// перевіряємо чи є фільм з таким id в локал сторадж, якщо є змінюю назву кнопки
// verifyIdOnCardOpen(id);

// функція яка по натисканню кнопки додає або видаляє значення в local storage
// onClickAddRemoveFromLibrary();



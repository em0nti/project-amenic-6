import { currentPage } from './show-current-page';
import { refs } from './constants';
import { onCardClick } from './card-handler';
import { openModal } from './modals/open-close-modals';

import { save, load, remove } from "./local-storage-service";
import {verifyIdOnCardOpen,  onClickAddRemoveFromLibrary, showIdOnCardClick} from "./buttons/add-remove-id-storage"

initModals();

currentPage();

refs.cards.addEventListener('click', onCardClick);

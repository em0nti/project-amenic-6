import { STORAGE_KEY } from './constants';

export function initStorage() {
  if (localStorage.getItem(STORAGE_KEY) == null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}
export function isInStorage(id) {
  try {
    const idStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return idStorage.includes(id);
  } catch (err) {
    console.error('Parse error', err.message);
  }
}

export function saveToStorage(id) {
  if (isInStorage(id)) return;
  try {
    const idStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    idStorage.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(idStorage));
  } catch (err) {
    console.error('Parse error', err.message);
  }
}

export function removeFromStorage(id) {
  try {
    const idStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const removedElIndex = idStorage.findIndex(element => element === id);
    idStorage.splice(removedElIndex, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(idStorage));
  } catch (err) {
    console.error('Parse error', err.message);
  }
}

export function getStorage() {
  try {
    const idStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return idStorage;
  } catch (err) {
    console.error('Parse error', err.message);
  }
}

export function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getStorageLength() {
  try {
    const idStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return idStorage.length;
  } catch (err) {
    console.error('Parse error', err.message);
  }
}

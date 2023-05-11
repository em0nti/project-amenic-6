export class CardStorage {
  constructor() {
    this.storageKey = 'cardIds';
    this.init();
  }

  init() {
    try {
      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
      }
    } catch (error) {
      console.error('Failed to initialize local storage: ', error);
    }
  }

  getCardIds() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey));
    } catch (error) {
      console.error('Failed to get card IDs from local storage: ', error);
      return [];
    }
  }

  addCardId(id) {
    try {
      const cardIds = this.getCardIds();

      if (!cardIds.includes(id)) {
        cardIds.push(id);
        localStorage.setItem(this.storageKey, JSON.stringify(cardIds));
      }
    } catch (error) {
      console.error('Failed to add card ID to local storage: ', error);
    }
  }

  removeCardId(id) {
    try {
      const cardIds = this.getCardIds();
      const index = cardIds.indexOf(id);

      if (index !== -1) {
        cardIds.splice(index, 1);
        localStorage.setItem(this.storageKey, JSON.stringify(cardIds));
      }
    } catch (error) {
      console.error('Failed to remove card ID from local storage: ', error);
    }
  }

  hasCardId(id) {
    try {
      const cardIds = this.getCardIds();
      return cardIds.includes(id);
    } catch (error) {
      console.error('Failed to check card ID in local storage: ', error);
      return false;
    }
  }
}
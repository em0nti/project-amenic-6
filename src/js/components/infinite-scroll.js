import appendMovieCards from './append-movie-cards' // заменить на функцию добавления карточек в card-list-container
const refs = {
    cardSetRef: document.querySelector('.card-set'), // заменить на тег картсета в который добавляется новый пулл карточек
}
export default function intersection() {
    const options = {
        rootMargin: '100px',
        threshold: 0.5,
    }
    let target = refs.cardSetRef.lastElementChild; // проверить правильность получения ссылки на последнюю отрисованную карточку 

    async function callback(entries, observer) {
        if (entries[0].isIntersecting) {
            console.log(target.dataset); // визуальная проверка наличия дата атрибута у последнего элемента списка
            updateTarget();
        }
    };
    const observer = new IntersectionObserver(callback, options);
    async function updateTarget() {
        try {
            observer.unobserve(target);
            await appendMovieCards();   // заменить на функцию добавления карточек в card-list-container
            let newTarget = refs.cardSetRef.lastElementChild; // проверить что сущеществует последний элемент списка карточек и ссылка не него получена
            console.log("new target:", newTarget.dataset); // визуализуальная проверка смены нового последнего элемента списка
            observer.observe(newTarget);
            return newTarget;
        } catch {
            observer.unobserve(target);
            throw "stop"
        }
    };
    observer.observe(target);
}
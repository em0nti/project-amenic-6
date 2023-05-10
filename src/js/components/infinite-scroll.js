import appendMovieCards from './append-movie-cards'
const refs = {
    cardSetRef: document.querySelector('.card-set'),
}
export default function intersection() {
    const options = {
        rootMargin: '100px',
        threshold: 0.5,
    }
    let target = refs.cardSetRef.lastElementChild;

    async function callback(entries, observer) {
        if (entries[0].isIntersecting) {
            updateTarget();
        }
};
    const observer = new IntersectionObserver(callback, options);
    async function updateTarget() {
        try {
            observer.unobserve(target);
            await appendMovieCards();
            target = refs.cardSetRef.lastElementChild;
            console.log("new target:", target);
            observer.observe(target);
        } catch {
            observer.unobserve(target);
            throw "stop"
          }
        };
    observer.observe(target); 
 }
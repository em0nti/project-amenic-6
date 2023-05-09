export default function intersection() {
    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    }
    let target = refs.galleryRef.lastElementChild; // изменить ссылку последнего элемента коллекции

    async function callback(entries, observer) {
        if (entries[0].isIntersecting) {
            updateTarget();
        }
};
    const observer = new IntersectionObserver(callback, options);
    async function updateTarget() {
            observer.unobserve(target);
            await appendPhotos(); 
            target = refs.galleryRef.lastElementChild; // изменить ссылку последнего элемента коллекции
            console.log("new target:", target);
            observer.observe(target); 
    }
    observer.observe(target); 
 }
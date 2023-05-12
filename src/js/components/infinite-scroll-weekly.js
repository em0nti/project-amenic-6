import appendTrendsCards from './append-weekly-cards';
const refs = {
  cardSetRef: document.querySelector('.card-set'),
};
export default function intersectionWeekly() {
  const options = {
    rootMargin: '100px',
    threshold: 0.5,
  };

  let target = refs.cardSetRef.lastElementChild;

  async function callback(entries, observer) {
    if (entries[0].isIntersecting) {
      console.log(target.dataset);
      updateTarget();
    }
  }

  const observer = new IntersectionObserver(callback, options);
  async function updateTarget() {
    try {
      observer.unobserve(target);

      await appendTrendsCards();
      let newTarget = refs.cardSetRef.lastElementChild;
      console.log('new target:', newTarget.dataset);

      observer.observe(newTarget);
      return newTarget;
    } catch {
      observer.unobserve(target);
      throw 'stop';
    }
  }
  observer.observe(target);
}

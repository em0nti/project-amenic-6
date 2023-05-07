// в функцию надо передать рейтинг из бекнеда в виде дробного числа
export default function renderRating(backendRating) {

    const starRating = backendRating / 2; 
    const ratingArr = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
<svg class="icon-star">
            <use href="/icons_new.7c5bd545.svg#icon-star"></use>
          </svg>
                </li>`)
        } else if (i === Math.ceil(starRating) && starRating % 1 !== 0) {
            ratingArr.push(
                `<li class="card__rate--item">
<svg class="icon-star">
            <use href="/icons_new.7c5bd545.svg#icon-star-half"></use>
          </svg>
                </li>`)
        } else if (i > starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
<svg class="icon-star">
            <use href="/icons_new.7c5bd545.svg#icon-star-outline"></use>
          </svg>
                </li>`)
        
        }
    }
    return ratingArr.join(" ");
}
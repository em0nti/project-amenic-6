// в функцию надо передать рейтинг из бекнеда в виде дробного числа
function renderRating(backendRating) {

    const starRating = backendRating / 2; 
    const ratingArr = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <img
                        class="card__rate--img"
                        src="./images/star-full.svg"
                        alt="star"
                    />
                </li>`)
        } else if (i === Math.ceil(starRating) && starRating % 1 !== 0) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <img
                        class="card__rate--img"
                        src="./images/star-half.svg"
                        alt="star"
                    />
                </li>`)
        } else if (i > starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <img
                        class="card__rate--img"
                        src="./images/star-empty.svg"
                        alt="star"
                    />
                </li>`)
        
        }
    }
    return ratingArr.join(" ");
}
 console.log(renderRating(7));

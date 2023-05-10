import renderRating from '../rating';
export default function createMarkup(cards) {
  return cards.map(({ poster_path, title, genre_ids, release_date, vote_average, id }) => {

    let listOfGenres = '';
    // if (genre_ids.length === 0) {
    //   listOfGenres = '';
    // } else if (genre_ids.length < 2) {
    //   listOfGenres = this.getNameGenre(genre_ids[0]);
    // } else {
    //   listOfGenres = this.getNameGenre(genre_ids[0]) + ', ' + this.getNameGenre(genre_ids[1]);
    // }

    // let yearOfRelease = release_date.slice(0, 4);
    let element = 'card';
    let starsRating = renderRating(vote_average, element);

    // console.log(yearOfRelease);
    return `<div class="card card__item card-set__item movi-card-general-set" data-id='${id}'>
  <img
    class="card__image"
    loading="lazy"
    src="https://image.tmdb.org/t/p/original${poster_path}"
    alt=""
  />
  <div class="card__footer">
    <div class="card__descr">
      <p class="card__name">${title}</p>
      <p class="card__details">
        <span>${listOfGenres}</span><span> | </span><span>${release_date}</span>
      </p>
    </div>
    <div class="card__rate">
      <ul class="card__rate--list">
${starsRating}
      </ul>
    </div>
  </div>
</div>`;
  })
  .join("")
}
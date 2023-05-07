export default class ApiMarkupService {
  constructor() {
    //here will be stored the array of films to markup (YOU MUST GET IT FROM FETCH CLASS, use setter 'setFilmsForMarkup')
    this.filmsForMarkupArray = [];
    //here will be stored the array of genres (YOU MUST GET IT FROM FETCH CLASS, use setter 'setGenresAll')
    this.genresAll = [];
  }
  //method for markup film card from arrays of films (like Weekly trends, upcoming etc.)
  markupFilmCard({ poster_path, title, genre_ids, release_date }) {
    let listOfGenres = '';
    if (genre_ids.length === 0) {
      listOfGenres = '';
    } else if (genre_ids.length < 2) {
      listOfGenres = this.getNameGenre(genre_ids[0]);
    } else {
      listOfGenres = this.getNameGenre(genre_ids[0]) + ', ' + this.getNameGenre(genre_ids[1]);
    }

    let yearOfRelease = release_date.slice(0, 4);
    // console.log(yearOfRelease);
    return `<div class="card__item card-set__item movi-card-general-set">
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
        <span>${listOfGenres}</span><span> | </span><span>${yearOfRelease}</span>
      </p>
    </div>
    <div class="card__rate">
      <ul class="card__rate--list">
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-full.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-full.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-full.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-half.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-empty.svg"
            alt="star"
          />
        </li>
      </ul>
    </div>
  </div>
</div>`;
  }
  // method for markup film card from fetch by ID Film
  markupFilmCardByID({ poster_path, title, genres, release_date }) {
    let listOfGenres = '';
    if (genres.length === 0) {
      listOfGenres = '';
    } else if (genres.length < 2) {
      listOfGenres = this.getNameGenre(genres[0].id);
    } else {
      listOfGenres = this.getNameGenre(genres[0].id) + ', ' + this.getNameGenre(genres[1].id);
    }

    let yearOfRelease = release_date.slice(0, 4);
    return `<div class="card__item card-set__item movi-card-general-set">
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
        <span>${listOfGenres}</span><span> | </span><span>${yearOfRelease}</span>
      </p>
    </div>
    <div class="card__rate">
      <ul class="card__rate--list">
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-full.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-full.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-full.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-half.svg"
            alt="star"
          />
        </li>
        <li class="card__rate--item">
          <img
            class="card__rate--img"
            src="./images/star-empty.svg"
            alt="star"
          />
        </li>
      </ul>
    </div>
  </div>
</div>`;
  }
  // method for markup film card from fetch by Upcoming
  markupFilmCardUpcoming({
    poster_path,
    title,
    genre_ids,
    release_date,
    vote_average,
    vote_count,
    popularity,
    overview,
  }) {
    let listOfGenres = '';
    if (genre_ids.length === 0) {
      listOfGenres = '';
    } else if (genre_ids.length < 2) {
      listOfGenres = this.getNameGenre(genre_ids[0]);
    } else {
      listOfGenres = this.getNameGenre(genre_ids[0]) + ', ' + this.getNameGenre(genre_ids[1]);
    }

    // let yearOfRelease = release_date.slice(0, 4);
    return `
        <div class="container">
    <h2 class="upcoming__title">Upcoming this month</h2>
    <div class="upcoming__section-wrapper">
      <picture>
        <source
          srcset="
            ${poster_path} 1x,
            ${poster_path} 2x
          "
          media="(min-width: 1200px)"
        />
        <source
          srcset="
           ${poster_path} 1x,
            ${poster_path} 2x
          "
          media="(min-width: 768px)"
        />
        <source
          srcset="
           ${poster_path} 1x,
            ${poster_path} 2x
          "
          media="(min-width: 320px)"
        />

        <img
          srcset="
             ${poster_path} 1x,
            ${poster_path} 2x
          "
          src="${poster_path}"
          class="upcoming__image"
          alt="Poster of film"
          width="805px"
        />
      </picture>

      <div class="upcoming__inform-wrapper">
        <h3 class="upcoming__film-name">${title}</h3>

        <ul class="upcoming__list-info list">
          <li class="upcoming-item-wrapper">
            <div class="upcoming__item">
              <p class="upcoming__parameter upcoming__parameter--color">
                Release date
              </p>
              <p class="upcoming__value upcoming__value--orange">${release_date}</p>
            </div>
            <div class="upcoming__item">
              <p class="upcoming__parameter upcoming__parameter--bckg">
                Vote / Votes
              </p>
              <p class="upcoming__value">
                <span class="upcoming__numbers--bckg">${vote_average}</span> /
                <span class="upcoming__numbers--bckg">${vote_count}</span>
              </p>
            </div>
          </li>

          <li class="upcoming-item-wrapper">
            <div class="upcoming__item">
              <p class="upcoming__parameter upcoming__parameter--number">
                Popularity
              </p>
              <p class="upcoming__value">${popularity}</p>
            </div>
            <div class="upcoming__item">
              <p class="upcoming__parameter upcoming__parameter--genre">
                Genre
              </p>
              <p class="upcoming__value">${listOfGenres}</p>
            </div>
          </li>
        </ul>

        <h4 class="upcoming__about">About</h4>
        <p class="upcoming__dcr">
        ${overview}
        </p>
        <button type="button" class="upcoming__btn-remind">Remind me</button>
      </div>
    </div>
  </div>
    `;
  }
  // method for markup gallery from arrays of films (like Weekly trends, upcoming etc.)
  markupGallery(numOfArray) {
    const markup = this.filmsForMarkupArray.filter(film => film.genre_ids.length !== 0);

    if (numOfArray) {
      let filmsMarkupArrayReduce = this.filmsForMarkupArray.slice(0, numOfArray);
      console.log(filmsMarkupArrayReduce);

      let markUpFilmsAllReduce = filmsMarkupArrayReduce
        .map(film => this.markupFilmCard(film))
        .join('');
      //   console.log('VVVVVVVV', vvv);
      return markUpFilmsAllReduce;
    } else {
      let markUpFilmsAll = markup.map(film => this.markupFilmCard(film)).join('');
      console.log('method -markupGallery- in ApiMarkupService', markUpFilmsAll);

      return markUpFilmsAll;
    }
  }
  // method for markup gallery from fetch by film ID
  markupGalleryByID() {
    const markup = this.filmsForMarkupArray.filter(film => film.genres.length !== 0);
    let markUpFilmsAll = markup.map(film => this.markupFilmCardByID(film)).join('');
    console.log('method -markupGalleryByID- in ApiMarkupService', markUpFilmsAll);

    return markUpFilmsAll;
  }
  // method for get genre name from ID
  getNameGenre(idGenre) {
    let nameGenre = this.genresAll.find(genre => genre.id === idGenre);
    return nameGenre.name;
  }
  //getter for array of films to markup
  get getFilmsForMarkup() {
    return this.filmsForMarkupArray;
  }
  //setter for array of films to markup
  set setFilmsForMarkup(filmsArray) {
    this.filmsForMarkupArray = filmsArray;
  }
  //setter genres for markup
  set setGenresAll(genres) {
    this.genresAll = genres;
  }
  //getter genres for markup
  get getGenresAll() {
    return this.genresAll;
  }
}

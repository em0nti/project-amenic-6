// import genres from './genres-array';
import renderRating from '../rating';
const genres = [
    {
        id: 28,
        name: 'Action'
    },
    {
        id: 12,
        name: 'Adventure'
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }
]

export default function createMarkup(cards) {
  return cards.map(({ poster_path, title, genre_ids, release_date, vote_average, id }) => {

    function getNameGenre(idGenre) {
      let nameGenre = genres.find(genre => genre.id === idGenre);

      return nameGenre.name;
    }
    
    let listOfGenres = 'unknown genre';
    if (genre_ids.length === 0) {
      listOfGenres = '';
    } else if (genre_ids.length < 2) {
      listOfGenres = getNameGenre(genre_ids[0]);
    } else {
      listOfGenres = getNameGenre(genre_ids[0]) + ', ' + getNameGenre(genre_ids[1])

    }

    let yearOfRelease = release_date.slice(0, 4);
    let element = 'card';
    let starsRating = renderRating(vote_average, element);

    if (!poster_path) {
      return `<div class="card card__item card-set__item movi-card-general-set" data-id='${id}'>
          <img
            class="card__image"
            loading="lazy"
            src="https://placehold.co/500x750?text=Poster+not+available"
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
        ${starsRating}
              </ul>
            </div>
          </div>
        </div>`;
      
    }
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
                <span>${listOfGenres}</span><span> | </span><span>${yearOfRelease}</span>
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

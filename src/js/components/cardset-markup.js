import { genresNames } from '../components/genresListNames';
import renderRating from '../rating';
import { basicCardTemplate } from './card-markup-templates';

async function getNameGenre() {
  try {
    const genreList = await genresNames.getGenresNames();

    console.log("🚀 ~ createMarkup ~ genres:", genresNames.genres)
    return genreList.genres;
        
  } catch (error) {
    console.log("ошибка в createMarkup", error);
  }
}

export default function createMarkup(cards) {
 console.log(getNameGenre());

  return cards.map(({ poster_path, title, genre_ids, release_date, vote_average, id }) => {

    //   function getNameGenre(idGenre) {
    //       let nameGenre = genres.find(genre => genre.id === idGenre);
    //       return nameGenre.name;
    //     }

    let listOfGenres = 'unknown genre';
    // if (genres.length === 0) {
    //   listOfGenres = '';
    // } else if (genres.length < 2) {
    //   listOfGenres = getNameGenre(genres[0]);
    // } else {
    //   listOfGenres = getNameGenre(genres[0]) + ', ' + getNameGenre(genres[1]);
    // }

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

export const basicCardTemplate = `<div class="card card__item card-set__item movi-card-general-set" data-id='${id}'>
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
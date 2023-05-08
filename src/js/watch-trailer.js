import YouTubePlayer from 'youtube-player';
import { refs } from './constants';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { openModal, closeModal } from './modals/open-close-modals';

// const watchTrailerBtn = refs.watchTrailerBtn;
const modalTrailerNotOk = refs.modalTrailerNotOk;
const modalTrailerOk = refs.modalTrailerOk;
const playerYT = document.getElementById('player');
// const closeButton = document.querySelector('.modal-trailer-success .modal__cloze-button');

// watchTrailerBtn.addEventListener('click', onWatchTrailerClick);

let player;

export async function onWatchTrailerClick() {
  await fetch('https://api.themoviedb.org/3/movie/880/videos?api_key=91ae85947dca7203ec2b4d7841a3c73b&language=en-US')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      // Извлекаем трейлер в формате YouTube
      const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer) {
        const trailerKey = trailer.key;
        console.log(trailerKey);
        player = YouTubePlayer(playerYT);
        player.loadVideoById(trailerKey);
        openModal(modalTrailerOk, player);
        // modalTrailerOk.classList.remove('backdrop--hidden');
        // closeButton.addEventListener('click', closeModalClick);
        // if (closeModal(modalTrailerOk)) {
        //   player.stopVideo();
        // }
        // function closeModalClick() {
        //   player.stopVideo();
        //   console.log('closeModalClick');
        //   modalTrailerOk.classList.add('backdrop--hidden');
        // }
      }
    })
    .catch(error => {
      console.log('Error in fetching in onWatchTrailerClick', error);
      openModal(modalTrailerNotOk);
      // modalTrailerNotOk.classList.remove('backdrop--hidden');
      // const closeButton = document.querySelector('.modal-trailer-oops .modal__cloze-button');
      // closeButton.addEventListener('click', closeModalClick);
      // function closeModalClick() {
      //   console.log('closeModalClick');
      //   modalTrailerNotOk.classList.add('backdrop--hidden');
      // }
    });
}

function createMarkup(trailerKey) {
  return `
            <iframe
                class="trailer-video"
                src="https://www.youtube.com/embed/${trailerKey}">
                allowfullscreen
            ></iframe>
        `;
}

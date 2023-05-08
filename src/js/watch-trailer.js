import YouTubePlayer from 'youtube-player';
import { refs } from './constants';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { openModal } from './modals/open-close-modals';

// const watchTrailerBtn = refs.watchTrailerBtn;
const modalTrailerNotOk = refs.modalTrailerNotOk;
const modalTrailerOk = refs.modalTrailerOk;
const playerYT = document.getElementById('player');

let player;

export async function onWatchTrailerClick(movieId){
  Loading.standard();
  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=91ae85947dca7203ec2b4d7841a3c73b&language=en-US`)

    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      // Извлекаем трейлер в формате YouTube
      const trailer = data.results.find(
        video => video.type === 'Trailer' && video.site === 'YouTube',
      );
      if (trailer) {
        const trailerKey = trailer.key;
        console.log(trailerKey);
        player = YouTubePlayer(playerYT, {
          height: '100%',
          width: '100%',
        });
        player.loadVideoById(trailerKey);
        Loading.remove();
        openModal(modalTrailerOk, player);
      }
    })
    .catch(error => {
      Loading.remove();
      console.log('Error in fetching in onWatchTrailerClick', error);
      openModal(modalTrailerNotOk);
    });
}

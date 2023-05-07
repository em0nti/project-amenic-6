import YouTubePlayer from 'youtube-player';

const watchTrailerBtn = document.getElementById('watch-trailer-btn');
const modalTrailerNotOk = document.getElementById('trailer-not-ok');
const modalTrailerOk = document.getElementById('trailer-ok');
const playerYT = document.getElementById('player');
const closeButton = document.querySelector('.modal-trailer-success .modal__cloze-button');

watchTrailerBtn.addEventListener('click', onWatchTrailerClick);

let player;

async function onWatchTrailerClick() {
        await fetch('https://api.themoviedb.org/3/movie/fdgsdfgsd/videos?api_key=91ae85947dca7203ec2b4d7841a3c73b&language=en-US')
        .then(response => {
        if (!response.ok) {
         throw new Error(response.status);
        }
        return response.json();  
        })
        .then(data => {
        // Извлекаем трейлер в формате YouTube
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
            if (trailer) {
            const trailerKey = trailer.key;
                console.log(trailerKey);
                player = YouTubePlayer(playerYT);
                player.loadVideoById(trailerKey);
            modalTrailerOk.classList.remove("backdrop--hidden");            
            closeButton.addEventListener('click', closeModalClick);
                function closeModalClick() {
                player.stopVideo();
                console.log("closeModalClick");
                modalTrailerOk.classList.add("backdrop--hidden"); 
            }
        } 
    })
        .catch(error => {
            console.log(error);
            modalTrailerNotOk.classList.remove("backdrop--hidden")
            const closeButton = document.querySelector('.modal-trailer-oops .modal__cloze-button');
            closeButton.addEventListener('click', closeModalClick);
            function closeModalClick() {
                console.log("closeModalClick");
                modalTrailerNotOk.classList.add("backdrop--hidden"); 
            }
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




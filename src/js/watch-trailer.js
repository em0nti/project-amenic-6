
const watchTrailerBtn = document.getElementById('watch-trailer-btn');
const modalTrailerNotOk = document.getElementById('trailer-not-ok');
const modalTrailerOk = document.getElementById('trailer-ok');
const trailerSrc = document.querySelector('.trailer-video');
const modalIframeRef = document.querySelector('.iframe');

watchTrailerBtn.addEventListener('click', onWatchTrailerClick);

async function onWatchTrailerClick() {
        await fetch('https://api.themoviedb.org/3/movie/640146/videos?api_key=91ae85947dca7203ec2b4d7841a3c73b&language=en-US')
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
        console.log(trailer.key);
            modalTrailerOk.classList.remove("backdrop--hidden");
            modalIframeRef.insertAdjacentHTML('beforeend', createMarkup(trailer.key));
            const closeButton = document.querySelector('.modal-trailer-success .modal__cloze-button');
            closeButton.addEventListener('click', closeModalClick);
            function closeModalClick() {
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

    //   // 2. This code loads the IFrame Player API code asynchronously.
    //   const tag = document.createElement('script');

    //   tag.src = "https://www.youtube.com/iframe_api";
    //   const firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //   // 3. This function creates an <iframe> (and YouTube player)
    //   //    after the API code downloads.
    //   let player;
    //   function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('player', {
    //       height: '360',
    //       width: '640',
    //       videoId: 'M7lc1UVf-VE',
    //       events: {
    //         'onReady': onPlayerReady,
    //         'onStateChange': onPlayerStateChange
    //       }
    //     });
    //   }

    //   // 4. The API will call this function when the video player is ready.
    //   function onPlayerReady(event) {
    //     event.target.playVideo();
    //   }

    //   // 5. The API calls this function when the player's state changes.
    //   //    The function indicates that when playing a video (state=1),
    //   //    the player should play for six seconds and then stop.
    //   let done = false;
    //   function onPlayerStateChange(event) {
    //     if (event.data == YT.PlayerState.PLAYING && !done) {
    //       setTimeout(stopVideo, 6000);
    //       done = true;
    //     }
    //   }
    //   function stopVideo() {
    //     player.stopVideo();
    //   }



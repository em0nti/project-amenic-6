
const watchTrailerBtn = document.getElementById('watch-trailer-btn');
const backdropToggle = document.querySelector('.backdrop--hidden');

watchTrailerBtn.addEventListener('click', onWatchTrailerClick);

function onWatchTrailerClick() {
    console.log("object");
        fetch('https://api.themoviedb.org/3/movie/809787/videos?api_key=91ae85947dca7203ec2b4d7841a3c73b&language=en-US')
        .then(response => {
        if (!response.ok) {
         throw new Error(response.status);
            }
        return response.json();  
        })
        .then(data => {
        // Извлекаем трейлер в формате YouTube
            console.log(data.results);
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (trailer) {
        const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
            console.log(trailerUrl);
            
        } else {
        console.log("Трейлер не найден");
        }
    })
        .catch(error => {
            console.log(error);
            backdropToggle.classList.remove("backdrop--hidden")
            const closeButton = document.querySelector('.modal__cloze-button');
            closeButton.addEventListener('click', closeModalClick);
            function closeModalClick() {
                console.log("closeModalClick");
                backdropToggle.classList.add("backdrop--hidden"); 
            }
        });
}

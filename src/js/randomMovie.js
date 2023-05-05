function getRandomMovieByCurrentDate() {
  const currentDate = new Date();

  const movies = [
    'The Avengers: Endgame 2',
    'Black Panther: Wakanda Forever',
    'Jurassic World: Dominion',
    'Avatar 3',
    'Spider-Man: No Way Home',
    'Fantastic Beasts and Where to Find Them 3',
    'The Flash',
    'Doctor Strange in the Multiverse of Madness',
    'Aquaman and the Lost Kingdom',
    'Captain Marvel 2',
  ];

  const randomMovieIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomMovieIndex];

  return randomMovie;
}

const randomMovie = getRandomMovieByCurrentDate();
console.log(`Сьогоднішній випадковий фільм: ${randomMovie}`);

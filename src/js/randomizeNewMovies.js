function randomizeNewMovies() {
  const today = new Date();

  // створюємо дату на тиждень вперед
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // генеруємо випадкову дату між поточною датою і датою на тиждень вперед
  const randomDate = new Date(
    today.getTime() + Math.random() * (nextWeek.getTime() - today.getTime())
  );

  const formattedDate = randomDate.toISOString().slice(0, 10);

  return formattedDate;
}

console.log(randomizeNewMovies());

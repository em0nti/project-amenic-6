export default function createSearchFailMarkup() {
  return `
  <div class="container">  
  <div class="not-found-film">
    <p class="not-found-film__text">
      <span class="not-found-film__text-item">OOPS...</span>
      <span class="not-found-film__text-item">We are very sorry!</span>
      <span class="not-found-film__text-item">We don’t have any results due to your search.</span>
    </p>
  </div>
  </div>
`;
}

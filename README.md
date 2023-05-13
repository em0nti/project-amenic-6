# Cinemania app

## Description

This repository contains the code for a test team project.

The term for writing a project from receiving a layout to the final presentation of the MVP is 7 days.

My own implementation of the project [here](https://github.com/em0nti/cinemania-site).

The project is an application that allows users to browse and filter a large collection of movies. It includes features such as a homepage with trending movies, a catalog page for browsing and searching movies, and a "My Library" page where users can save movies for later viewing.

The layout design is available in Figma. The project was built with Parcel, using the [Parcel Project Template](https://goitacademy.github.io/parcel-project-template) by GoIT Academy.

## Figma Layout

You can view the Figma layout for this project [here](https://www.figma.com/file/z7VY1GvA5xVR2ix7xeOfxx/Cinemania?type=design&t=HUuZLiZFyJAo7Idt-6).

## Technical task for the MVP (Minimum Viable Product)

The MVP version of the project includes the following components:

### Header

The header is displayed on all pages and includes different elements based on the device's screen size:

- Mobile:

  - Logo
  - Navigation menu with links to Home, Catalog, and My Library
  - Theme switcher

- Tablet & Desktop:

- Logo
- Navigation menu with links to Home, Catalog, and My Library
- Theme switcher
- Description of some behavior:
  - Clicking on the logo or the Home link opens the homepage.
  - Clicking on Catalog opens the page with a large collection of movies that can be filtered based on user preferences.
  - Clicking on My Library opens the page with movies added by the user for later viewing.
  - Clicking on the menu expands it vertically to fill the viewport's height.
  - Clicking on the theme switcher changes the current theme of the website (default is dark theme).

### Hero

The hero section is displayed on all pages and shows information about one trending movie of the day. The movie is randomly selected from a list of movies for the current date. If no movies are found, the hero section should display default content, including a background image and a "Get started" button that redirects the user to the Catalog page.

The movie information displayed in the hero section includes:

- Movie image: `https://image.tmdb.org/t/p/original/${film.backdrop_path}`
- Title
- Rating
- Short description

Clicking on the button in the hero section will open a modal window with the movie trailer. The trailer URL is `https://api.themoviedb.org/3/movie/{idFilm}/videos?api_key=YOUR_KEY&language=en-US`. If the trailer is not available, a text message with apologies should be displayed.

### Modal Window

The modal window is used on all pages and provides detailed information about a movie. It includes the following elements:

- Movie poster image
- Title
- Rating
- Popularity
- Short description of the movie
- Button for adding/removing the movie from My Library

Clicking on the button for adding/removing the movie should update the information in My Library, which should be stored in localStorage.

Closing the modal window can be done by clicking on the backdrop, the close button (with an X icon), or pressing the ESC key. Make sure to remove event listeners appropriately.

### Footer

The footer is displayed on all pages and includes information about copyright, the year of project implementation, and the development team.

### Home Page

The Home page includes the following components:

#### Hero

The hero section displays the movie of the day.

#### Weekly Trends

This section displays cards for movies that are considered trending for the current week. It also includes a "See all" link that redirects the user to the Catalog page.

Implement a template for a movie card, which should open a modal window with detailed information about the movie when clicked.

#### Upcoming This Month

This section displays information about one of the new movies randomly selected from a list of movies for the current date. If no movies are found, display an appropriate message to the user. The movie information displayed includes:

- Movie image: `https://image.tmdb.org/t/p/original/${film.backdrop_path}`
- Title
- Release date
- Rating
- Genres
- Short description of the movie

Clicking on a button in this section should add the movie to the collection of displayed movies on page [My Library](#my-library)

### Catalog

The Catalog section includes the following components:

#### Hero
The hero section displays the movie of the day.

#### Search Block
The search block contains a form with a field where users can enter a keyword for searching movies, along with a submit button. Upon submitting the form, the movies matching the search results should be rendered in the movies list block. If no movies are found, an appropriate message should be displayed to the user.

#### Movies List Block
This block displays a list of movies. By default, the block shows the trending movies of the week when the user navigates to the Catalog page. If no movies are found, an appropriate message should be displayed to the user.

#### Pagination Block
Pagination should be implemented on the server side, where the server returns the results in portions or pages, rather than all at once. Users can navigate through the pages to access additional movies.

### My Library

The My Library section includes the following components:

#### Hero
The hero section displays the movie of the day.

#### Movies List Block
This block contains a list of movies that have been added by the user. The movies are stored in the browser's localStorage. When the user navigates to the My Library page, the movies that were added by the user should be rendered in this block. If no movies are found, an appropriate message should be displayed to the user.

Please ensure that the functionality for adding, removing, and displaying movies in the My Library section is implemented correctly, along with appropriate error handling and user feedback.

## API Integration

This project integrates with The Movie Database (TMDb) API to fetch movie data and images. The TMDb API provides a wide range of movie-related information, including movie details, images, trailers, and more.

To use the TMDb API, you'll need to sign up for an account on their website and obtain an API key. The API key is required to authenticate your requests and access the data.

Once you have your API key, you can include it in your API requests by appending it as a query parameter in the URL.
Here's an example URL:
- for fetching movie details:

  `https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY&language=en-US`

  Replace `{movie_id}` with the actual ID of the movie you want to fetch, and `YOUR_API_KEY` with your TMDb API key.

- Similarly, you can retrieve movie images using the following URL:

  `https://image.tmdb.org/t/p/original/{image_path}`

  Replace `{image_path}` with the path of the movie image obtained from the API response.

- For fetching movie trailers, you can use the following URL:

  `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=YOUR_API_KEY&language=en-US`

  Again, replace `{movie_id}` with the ID of the movie you want to fetch, and `YOUR_API_KEY` with your TMDb API key.

Please refer to the [TMDb API documentation](https://developers.themoviedb.org/3/getting-started/introduction) for more information on available endpoints and request parameters.

Make sure to handle API errors and edge cases gracefully in your project, such as checking for missing data or handling rate limits imposed by the TMDb API.

## Installation

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/yourusername/web-studio-test-project.git
    ```
2. Navigate into the project directory.
    ```bash
    cd web-studio-test-project
    ```
3. Install the required dependencies.
    ```bash
    npm install
    ```
4. Start the project.
    ```bash
    npm start
    ```
The project will be available at `localhost:1234`.

## Project Structure

The project has the following structure:

- `assets/`: This directory contains all static assets which are not directly related to the project's source code.

- `dist/`: This directory will contain the final, compiled version of the project. This is the code that you will deploy to your server.

- `src/`: This is the source directory, it contains all the source code of the project.

    - `fonts/`: This directory contains all the font files used in the project.

    - `images/`: This directory contains all the image files used in the project.

    - `js/`: This directory contains all the JavaScript files of the project.

    - `partials/`: This directory contains HTML partials - reusable chunks of HTML code.

    - `sass/`: This directory contains all the SASS files, which will be compiled into CSS. It is further organized into:

        - `base/`: This directory contains the base SASS files, such as resets and typography.

        - `components/`: This directory contains SASS files for each component.

        - `utils/`: This directory contains utility SASS files, such as variables and mixins.

    - `catalog.html`: This is the HTML file for the catalog page of the website.

    - `index.html`: This is the main HTML file for the website.

    - `library.html`: This is the HTML file for the library page of the website.

## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit)
// создается и экспортируется экземпляр объекта,
//  который отвечает за поиск фильма по ключевой фразе

import TmdbApi from '../api_tmdb/api_fetch-by-query';
export const tmdbApi = new TmdbApi();

// для импорта объекта необходим следующий код:
// import { tmdbApi } from './components/tmdbApi';
// путь к объекту необходимо изменить к каждом конкретном случае

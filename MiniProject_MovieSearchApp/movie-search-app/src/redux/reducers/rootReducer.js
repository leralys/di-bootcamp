import { combineReducers } from 'redux';
import { movieSearchReducer } from './movieSearchReducer';
import { fetchMovieReducer } from './fetchMovieReducer';

export default combineReducers({
    movies: movieSearchReducer,
    movieInfo: fetchMovieReducer
});
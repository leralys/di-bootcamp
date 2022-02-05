import {
    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILED
} from '../constants';

const initState = {
    error: '',
    movie: [],
    isPending: false
}

export const fetchMovieReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case FETCH_MOVIE_PENDING:
            return {
                ...state,
                isPending: true,
                movie: [],
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.payload,
                error: ''
            }
        case FETCH_MOVIE_FAILED:
            return {
                ...state,
                movie: [],
                error: action.payload
            }
        default:
            return { ...state }
    }
}

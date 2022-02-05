import {
    CHANGE_SEARCH_TEXT,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILED
} from './constants';

const initState = {
    searchText: '',
    data: [],
    isPending: false,
    error: '',
    movie: []
}

// too long?
export const movieSearchReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return { ...state, searchText: action.payload }
        case REQUEST_MOVIES_PENDING:
            return {
                ...state,
                isPending: true,
                searchText: '',
            }
        case REQUEST_MOVIES_SUCCESS:
            return {
                ...state,
                data: action.payload.Search,
                isPending: false,
                searchText: '',
                error: ''
            }
        case REQUEST_MOVIES_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false,
                searchText: '',
                data: []
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

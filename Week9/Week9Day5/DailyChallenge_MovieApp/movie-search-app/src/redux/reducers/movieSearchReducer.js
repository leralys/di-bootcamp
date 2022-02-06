import {
    CHANGE_SEARCH_TEXT,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED,
    RETURN_TO_MAIN
} from '../constants';

const initState = {
    searchText: '',
    data: [],
    isPending: false,
    error: ''
}

export const movieSearchReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
                isPending: false,
                error: ''
            }
        case REQUEST_MOVIES_PENDING:
            return {
                ...state,
                isPending: true,
                searchText: '',
                error: ''
            }
        case REQUEST_MOVIES_SUCCESS:
            // console.log('REQUEST_MOVIES_SUCCESS', action.payload.Search);
            return {
                ...state,
                data: action.payload.Search,
                isPending: false,
                searchText: '',
                error: action.payload.Error
                // error: action.payload.Search || 'Sorry, something went wrong'
            }
        case REQUEST_MOVIES_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false,
                searchText: '',
                data: [],
            }
        case RETURN_TO_MAIN:
            return {
                ...state,
                error: '',
                isPending: false,
                searchText: '',
                data: [],
            }
        default:
            return { ...state }
    }
}

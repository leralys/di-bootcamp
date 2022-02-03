import {
    CHANGE_SEARCH_TEXT,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED
} from '../constants';

const initState = {
    searchText: '',
    data: [],
    isPending: false,
    error: ''
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return { ...state, searchText: action.payload }
        case REQUEST_MOVIES_PENDING:
            return { ...state, isPending: true }
        case REQUEST_MOVIES_SUCCESS:
            return { ...state, data: action.payload.Search, isPending: false, searchText: '' }
        case REQUEST_MOVIES_FAILED:
            return { ...state, error: action.payload, isPending: false, searchText: '' }
        default:
            return { ...state };
    }
}
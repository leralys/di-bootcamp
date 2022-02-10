import {
    CHANGE_SEARCH_TEXT,
    REQUEST_WEATHER_PENDING,
    REQUEST_WEATHER_SUCCESS,
    REQUEST_WEATHER_ERROR,
} from '../constants';

const initState = {
    searchText: '',
    cityKey: 215854,
    loading: false,
    data: {}
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
        case REQUEST_WEATHER_PENDING:
            return {
                ...state,
                searchText: '',
                loading: true
            }
        case REQUEST_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case REQUEST_WEATHER_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return { ...state }
    }
}
import {
    CHANGE_SEARCH_TEXT
} from '../constants';

export const changeSearchText = text => {
    return {
        type: CHANGE_SEARCH_TEXT,
        payload: text
    }
}


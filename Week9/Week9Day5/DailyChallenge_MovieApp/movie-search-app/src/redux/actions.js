import {
    CHANGE_SEARCH_TEXT,
    REQUEST_MOVIES_PENDING,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILED,
    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILED,
    RETURN_TO_MAIN
} from './constants';

import APIKey from '../APIKey';

export const setSearchText = text => {
    return {
        type: CHANGE_SEARCH_TEXT,
        payload: text
    }
}

export const findMovies = () => async (dispatch, getState) => {
    const { searchText } = getState().movies;
    // if no search text - no need to fetch
    if (searchText === '') return;
    else {
        // for the spinner  
        dispatch({ type: REQUEST_MOVIES_PENDING });
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&s=${searchText}`);
            const data = await responce.json();
            dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: data });
        }
        catch (err) {
            dispatch({ type: REQUEST_MOVIES_FAILED, payload: err })
        }
    }
}

export const getMovieById = id => async (dispatch) => {
    dispatch({ type: FETCH_MOVIE_PENDING });
    try {
        const responce = await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`);
        const data = await responce.json();
        dispatch({ type: FETCH_MOVIE_SUCCESS, payload: data });
    }
    catch (err) {
        dispatch({ type: FETCH_MOVIE_FAILED, payload: err })
    }
}

export const clearState = () => {
    return {
        type: RETURN_TO_MAIN
    }
}
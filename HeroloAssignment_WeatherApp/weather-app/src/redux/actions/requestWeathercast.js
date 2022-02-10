import {
    REQUEST_WEATHER_PENDING,
    REQUEST_WEATHER_SUCCESS,
    REQUEST_WEATHER_ERROR
} from '../constants';
import axios from 'axios';
import { apiKey } from '../../api/api';

export const requestWeathercast = () => async (dispatch, getState) => {
    const { cityKey } = getState();
    console.log(cityKey);
    dispatch({ type: REQUEST_WEATHER_PENDING });
    try {
        const res = await axios.get(`http://localhost:2500/api/five`);
        dispatch({
            type: REQUEST_WEATHER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REQUEST_WEATHER_ERROR,
            payload: console.log(err)
        })
    }
}
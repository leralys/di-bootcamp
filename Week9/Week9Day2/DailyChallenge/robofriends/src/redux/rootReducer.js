import { combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';

export default combineReducers({ searchRobots, requestRobots });
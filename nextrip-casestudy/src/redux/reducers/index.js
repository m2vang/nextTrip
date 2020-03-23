import {combineReducers} from 'redux';
import BusRouteReducer from './BusRouteReducer';

export default combineReducers ({
    bRoute: BusRouteReducer,
});
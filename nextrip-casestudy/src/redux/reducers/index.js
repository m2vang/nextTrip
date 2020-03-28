import { combineReducers } from 'redux';
import BusRouteReducer from './BusRouteReducer';
import DirectionReducer from "./DirectionReducer";

export default combineReducers ({
    bRoute: BusRouteReducer,
    dRoute: DirectionReducer,
});
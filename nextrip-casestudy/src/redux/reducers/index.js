import { combineReducers } from 'redux';
import BusRouteReducer from './BusRouteReducer';
import DirectionReducer from './DirectionReducer';
import StopReducer from './StopReducer';

export default combineReducers ({
    bReducer: BusRouteReducer,
    dReducer: DirectionReducer,
    sReducer: StopReducer
});
import { combineReducers } from 'redux';
import BusRouteReducer from './BusRouteReducer';
import DirectionReducer from './DirectionReducer';
import StopReducer from './StopReducer';
import DepartureReducer from './DepartureReducer';

export default combineReducers ({
    bReducer: BusRouteReducer,
    dReducer: DirectionReducer,
    sReducer: StopReducer,
    departReducer: DepartureReducer
});
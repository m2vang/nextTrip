import { STORE_BUS_ROUTE, CLEAR_BUS_ROUTE } from './Types';

export const storeBusRoute = (route) => {
    return (dispatch) => {
        dispatch({
            type: STORE_BUS_ROUTE,
            payload: route
        });
    };
};

export const clearBusRoute = () => {
    return (dispatch) => {
        dispatch({type: CLEAR_BUS_ROUTE})
    };
};
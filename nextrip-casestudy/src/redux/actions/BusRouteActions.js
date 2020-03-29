import { STORE_BUS_ROUTE, CLEAR_BUS_ROUTE_DATA, STORE_ROUTE_DATA } from './Types';

export const storeRouteData = (data) => {
    return { type: STORE_ROUTE_DATA, data };
};

export const storeBusRoute = (route) => {
    return { type: STORE_BUS_ROUTE, route };
};

export const clearBusRouteData = () => {
    return { type: CLEAR_BUS_ROUTE_DATA };
};
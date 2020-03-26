import { STORE_BUS_ROUTE, CLEAR_BUS_ROUTE,STORE_ROUTE_DATA } from './Types';

export const storeRouteData = (data) => {
    return { type: STORE_ROUTE_DATA, data };
};

export const storeBusRoute = (route) => {
    return { type: STORE_BUS_ROUTE, route };
};

export const clearBusRoute = () => {
    return { type: CLEAR_BUS_ROUTE };
};
import { STORE_BUS_ROUTE, CLEAR_BUS_ROUTE } from './Types';

export const storeBusRoute = (route) => {
    return { type: STORE_BUS_ROUTE, route };
};

export const clearBusRoute = () => {
    return { type: CLEAR_BUS_ROUTE };
};
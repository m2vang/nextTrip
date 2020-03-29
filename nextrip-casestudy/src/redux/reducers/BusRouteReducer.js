import { STORE_BUS_ROUTE, CLEAR_BUS_ROUTE_DATA, STORE_ROUTE_DATA} from '../actions/Types';

const INIT_STATE = {
    busRoute: '',
    steps: ['Select Route', 'Select Direction', 'Select Stop'],
    routeTitles: ['Route', 'Description'],
    routeData: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case STORE_BUS_ROUTE:
            return { ...state, busRoute: action.route };
        case CLEAR_BUS_ROUTE_DATA:
            return { ...state, busRoute: '', routeData: '' };
        case STORE_ROUTE_DATA:
            return { ...state, routeData: action.data };
        default:
            return state;
    }
}
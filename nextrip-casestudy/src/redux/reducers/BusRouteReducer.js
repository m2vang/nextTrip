import { STORE_BUS_ROUTE, CLEAR_BUS_ROUTE } from '../actions/Types';

const INIT_STATE = {
    busRoute: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case STORE_BUS_ROUTE:
            return { ...state, busRoute: action.route };
        case CLEAR_BUS_ROUTE:
            return { ...state, busRoute: '' };
        default:
            return state;
    }
}
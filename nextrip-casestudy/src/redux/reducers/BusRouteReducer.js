import { STORE_BUS_ROUTE, CLEAR_BUS_ROUTE } from '../actions/Types';
import { INIT_STATE } from '../InitialStates';

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
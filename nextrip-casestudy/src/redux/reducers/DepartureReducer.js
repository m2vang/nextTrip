import { STORE_DEPARTURES_DATA } from '../actions/Types';
import { INIT_STATE } from '../InitialStates';

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case STORE_DEPARTURES_DATA:
			return { ...state, departures: action.departuresData};
		default:
			return state;
	}
}
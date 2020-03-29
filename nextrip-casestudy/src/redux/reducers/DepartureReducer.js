import { STORE_DEPARTURES_DATA, CLEAR_DEPARTURES_DATA } from '../actions/Types';

const INIT_STATE = {
	departuresTitle: ['Route', 'Description', 'Departure Time'],
	departures: []
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case STORE_DEPARTURES_DATA:
			return { ...state, departures: action.departuresData };
		case CLEAR_DEPARTURES_DATA:
			return { ...state, departures: [] };
		default:
			return state;
	}
}
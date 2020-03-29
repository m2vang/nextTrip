import { STORE_STOPS_DATA, STORE_SELECTED_STOP, CLEAR_STOP_DATA } from '../actions/Types';

const INIT_STATE = {
	stopsArr: [],
	selectedStop: '',
	stopNumber: ''
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case STORE_STOPS_DATA:
			return { ...state, stopsArr: action.stopsData };
		case STORE_SELECTED_STOP:
			return { ...state, selectedStop: action.chosenStop, stopNumber: action.chosenStop[Object.keys(action.chosenStop)[Object.keys(action.chosenStop).length-1]] };
		case CLEAR_STOP_DATA:
			return { ...state, stopsArr: [], selectedStop: '', stopNumber: '' };
		default:
			return state;
	}
}
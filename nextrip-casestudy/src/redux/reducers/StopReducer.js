import { STORE_STOPS_DATA, STORE_SELECTED_STOP } from '../actions/Types';
import { INIT_STATE } from '../InitialStates';

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case STORE_STOPS_DATA:
			return { ...state, stopsArr: action.stopsData };
		case STORE_SELECTED_STOP:
			return { ...state, selectedStop: action.chosenStop };
		default:
			return state;
	}
}
import { STORE_DIRECTION_DATA, STORE_SELECTED_DIRECTION } from "../actions/Types";
import { INIT_STATE } from "../InitialStates";

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case STORE_DIRECTION_DATA:
			return { ...state, directionsArr: action.directionArr };
		case STORE_SELECTED_DIRECTION:
			return { ...state, selectedDirection: action.selectedDirection };
		default:
			return state;
	}
}
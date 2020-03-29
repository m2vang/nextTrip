import {
	STORE_DIRECTION_DATA,
	STORE_SELECTED_DIRECTION,
	CLEAR_DIRECTION_DATA
} from "../actions/Types";

const INIT_STATE = {
	directionsArr: [],
	selectedDirection: '',
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case STORE_DIRECTION_DATA:
			return { ...state, directionsArr: action.directionArr };
		case STORE_SELECTED_DIRECTION:
			return { ...state, selectedDirection: action.selectedDirection };
		case CLEAR_DIRECTION_DATA:
			return { ...state, directionsArr: [], selectedDirection: '' };
		default:
			return state;
	}
}
import { STORE_DIRECTION_DATA, STORE_SELECTED_DIRECTION, CLEAR_DIRECTION_DATA } from "./Types";

export const storeDirectionData = (directionArr) => {
	return { type: STORE_DIRECTION_DATA, directionArr };
};

export const storeSelectedDirection = (selectedDirection) => {
	return { type: STORE_SELECTED_DIRECTION, selectedDirection };
};

export const clearDirectionData = () => {
	return { type: CLEAR_DIRECTION_DATA };
};
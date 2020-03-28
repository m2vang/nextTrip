import { STORE_DIRECTION_DATA, STORE_SELECTED_DIRECTION } from "./Types";

export const storeDirectionData = (directionArr) => {
	return { type: STORE_DIRECTION_DATA, directionArr };
};

export const storeSelectedDirection = (selectedDirection) => {
	return { type: STORE_SELECTED_DIRECTION, selectedDirection };
};
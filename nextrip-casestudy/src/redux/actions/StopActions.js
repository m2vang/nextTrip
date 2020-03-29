import { STORE_STOPS_DATA, STORE_SELECTED_STOP, CLEAR_STOP_DATA } from './Types';

export const storeStopsData = (stopsData) => {
	return { type: STORE_STOPS_DATA, stopsData };
};

export const storeSelectedStop = (chosenStop) => {
	return { type: STORE_SELECTED_STOP, chosenStop };
};

export const clearStopsData = () => {
	return { type: CLEAR_STOP_DATA };
};
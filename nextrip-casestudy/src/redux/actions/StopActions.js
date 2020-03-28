import { STORE_STOPS_DATA, STORE_SELECTED_STOP } from './Types';

export const storeStopsData = (stopsData) => {
	return { type: STORE_STOPS_DATA, stopsData };
};

export const storeSelectedStop = (chosenStop) => {
	return { type: STORE_SELECTED_STOP, chosenStop };
};
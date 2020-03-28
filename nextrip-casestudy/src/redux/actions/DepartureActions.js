import { STORE_DEPARTURES_DATA } from './Types';

export const storeDeparturesData = (departuresData) => {
	return { type: STORE_DEPARTURES_DATA, departuresData }
};
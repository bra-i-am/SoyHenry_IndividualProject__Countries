import axios from "axios";

import {
	GET_COUNTRIES,
	GET_COUNTRY,
	GET_ACTIVITIES,
	GET_ALL_ACTIVITIES,
	FILTER_ACTIVITY,
	FILTER_REGION,
	SORT,
	ORDER,
	RESET_COUNTRIES,
	RESET_COUNTRY,
} from "./ActionTypes";

/** Countries */
export function getCountries(name) {
	return async function (dispatch) {
		const { data } = name
			? await axios.get(`http://localhost:3001/countries?name=${name}`)
			: await axios.get("http://localhost:3001/countries");

		return dispatch({
			type: GET_COUNTRIES,
			payload: name ? { data, name } : data,
		});
	};
}

export function getCountry(countryId) {
	return async function (dispatch) {
		const { data } = await axios.get(
			`http://localhost:3001/countries/${countryId}`,
		);

		return dispatch({
			type: GET_COUNTRY,
			payload: data,
		});
	};
}

/** Activities */
export function getActivities() {
	return async function (dispatch, getState) {
		/** Getting names of activities from DDBB */
		const { data } = await axios.get("http://localhost:3001/activities");
		const ddbbActivityNames = data.map((activity) => activity.name);

		/** Getting names of activities from countries displayed */
		const {
			countriesReducer: { countries },
		} = getState();
		const stateActivitiesNames = Array.from(
			new Set(
				countries
					.flatMap((country) => country.activities)
					.map((activity) => activity.name),
			),
		);

		/** Getting activities of countries displayed */
		const actualActivitiesToDisplay = stateActivitiesNames.length
			? ddbbActivityNames.filter(
					(activity) => stateActivitiesNames.includes(activity) && activity,
			  )
			: [];

		return dispatch({
			type: GET_ACTIVITIES,
			payload: actualActivitiesToDisplay,
		});
	};
}

export function getAllActivities() {
	return async function (dispatch) {
		const { data } = await axios.get("http://localhost:3001/activities");
		const activityNames = data.map((activity) => activity.name);

		return dispatch({
			type: GET_ALL_ACTIVITIES,
			payload: activityNames,
		});
	};
}

export function postActivity(info) {
	return async function () {
		return await axios.post("http://localhost:3001/activities", info);
	};
}

export function putActivity(info) {
	return async function () {
		return await axios.put("http://localhost:3001/activities", info);
	};
}

/** Filters */
export function filterRegion(region) {
	return {
		type: FILTER_REGION,
		payload: region,
	};
}
export function filterActivity(activity) {
	return {
		type: FILTER_ACTIVITY,
		payload: activity,
	};
}

/** Orders */
export function order(payload) {
	return {
		type: ORDER,
		payload,
	};
}
export function sort(payload) {
	return {
		type: SORT,
		payload,
	};
}

/** Reset */
export function resetCountries() {
	return {
		type: RESET_COUNTRIES,
	};
}
export function resetCountry() {
	return {
		type: RESET_COUNTRY,
	};
}

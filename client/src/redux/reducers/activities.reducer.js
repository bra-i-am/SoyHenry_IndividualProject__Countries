import { GET_ACTIVITIES, GET_ALL_ACTIVITIES } from "../actions/ActionTypes";

const initialState = {
	activities: [],
};

export default function activitiesReducer(
	state = initialState,
	{ type, payload },
) {
	switch (type) {
		case GET_ALL_ACTIVITIES:
			return {
				...state,
				activities: payload,
			};

		case GET_ACTIVITIES:
			return {
				...state,
				activities: payload,
			};

		default:
			return state;
	}
}

import {
	GET_COUNTRIES,
	GET_COUNTRY,
	FILTER_ACTIVITY,
	FILTER_REGION,
	SORT,
	ORDER,
	RESET_COUNTRIES,
	RESET_COUNTRY,
} from "../actions/ActionTypes";

export const initialState = {
	country: {},
	countries: [],
	countriesAux: [],
	regionsFiltered: [],
};

export default function countriesReducer(
	state = initialState,
	{ type, payload },
) {
	switch (type) {
		/** Getters */
		case GET_COUNTRIES:
			const { name, data } = payload;
			return name
				? {
						...state,
						countries: data,
				  }
				: {
						...state,
						countries: payload,
						countriesAux: payload,
						regionsFiltered: payload,
				  };
		case GET_COUNTRY:
			return {
				...state,
				country: payload,
			};

		/** Filters */
		case FILTER_REGION:
			const filteredRegion =
				payload === "All"
					? state.countriesAux
					: state.countriesAux.filter(
							(country) =>
								country.region.toLowerCase() === payload.toLowerCase(),
					  );
			return {
				...state,
				countries: filteredRegion,
				regionsFiltered: filteredRegion,
			};
		case FILTER_ACTIVITY:
			const filteredActivities =
				payload === "All"
					? state.regionsFiltered
					: state.countries.filter((country) =>
							country.activities.find(
								(activity) =>
									activity.name.toLowerCase() === payload.toLowerCase(),
							),
					  );
			return {
				...state,
				countries: filteredActivities.length ? filteredActivities : "Not found",
			};

		/** Orders */
		case ORDER:
			const ordered = state.countries.sort((a, b) => {
				if (a[payload] > b[payload]) return 1;
				if (a[payload] < b[payload]) return -1;
				return 0;
			});

			return {
				...state,
				countries: ordered,
			};

		case SORT:
			const { value, order } = payload;

			const sorted =
				value === "asc"
					? state.countries.sort((a, b) => {
							if (a[order] > b[order]) return 1;
							if (a[order] < b[order]) return -1;
							return 0;
					  })
					: state.countries.sort((a, b) => {
							if (a[order] > b[order]) return -1;
							if (a[order] < b[order]) return 1;
							return 0;
					  });

			return {
				...state,
				countries: sorted,
			};

		/** Reset */
		case RESET_COUNTRIES:
			return {
				...state,
				countries: [],
				countriesAux: [],
				regionsFiltered: [],
			};

		case RESET_COUNTRY:
			return {
				...state,
				country: {},
			};

		default:
			return state;
	}
}

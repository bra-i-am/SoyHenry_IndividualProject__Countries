import {
	GET_COUNTRIES,
	GET_COUNTRY,
	FILTER,
	FILTER_ACTIVITY,
	FILTER_REGION,
	SORT,
	ORDER,
	RESET_COUNTRIES,
	RESET_COUNTRY,
} from "../actions/ActionTypes";

export const initialState = {
	country: {},
	countries: [], //Countries que se estan renderizando
	countriesAux: [], //Permanece con todas las countries
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
						countriesSearch: data,
						countriesSearchAux: data,
				  }
				: {
						...state,
						countries: payload,
						countriesAux: payload,
				  };
		case GET_COUNTRY:
			return {
				...state,
				country: payload,
			};

		/** Filters */
		case FILTER:
			const { region, activity } = payload;

			if (region === "All" && activity === "All") {
				return {
					...state,
					countries: state.countriesAux,
				};
			} else if (region !== "All" && activity === "All") {
				const regionFiltered = state.countriesAux.filter(
					(country) => country.region.toLowerCase() === region.toLowerCase(),
				);
				return {
					...state,
					countries: regionFiltered.length ? regionFiltered : "Not found",
				};
			} else if (region === "All" && activity !== "All") {
				const activityFiltered = state.countriesAux.filter((country) =>
					country.activities.find(
						(el) => el.name.toLowerCase() === activity.toLowerCase(),
					),
				);
				return {
					...state,
					countries: activityFiltered.length ? activityFiltered : "Not found",
				};
			} else {
				const countriesFiltered = state.countriesAux.filter(
					(country) =>
						country.region.toLowerCase() === region.toLowerCase() &&
						country.activities.find(
							(el) => el.name.toLowerCase() === activity.toLowerCase(),
						),
				);
				return {
					...state,
					countries: countriesFiltered.length ? countriesFiltered : "Not found",
				};
			}

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
				countriesFiltered: [],
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

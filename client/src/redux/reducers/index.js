import { combineReducers } from "redux";

import countriesReducer from "./countries.reducer";
import activitiesReducer from "./activities.reducer";

export default combineReducers({
	countriesReducer,
	activitiesReducer,
});

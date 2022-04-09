/** Search Bar */
export const handleChange = (e, updateState) => {
	e.preventDefault();
	updateState({ [e.target.name]: e.target.value });
};

export const handleSubmit = (
	e,
	search,
	getCountries,
	resetState,
	resetHomeState,
) => {
	e.preventDefault();
	search && getCountries(search);
	resetState();
	resetHomeState();
};

export const handleReset = (
	e,
	resetSearchBarState,
	resetCountries,
	resetHomeState,
) => {
	e.preventDefault();
	resetSearchBarState();
	resetCountries();
	resetHomeState();
};

/** Filters */
export const handleRegionChange = (
	e,
	filterRegion,
	filterActivity,
	updateState,
	resetOrders,
) => {
	e.preventDefault();
	filterRegion(e.target.value);
	filterActivity("All");
	updateState({ regionFilter: e.target.value, activityFilter: "All" });
	resetOrders();
};

export const handleActivityChange = (
	e,
	filterActivity,
	resetOrders,
	updateState,
) => {
	e.preventDefault();
	filterActivity(e.target.value);
	resetOrders();
	updateState({ activityFilter: e.target.value });
};

/** Orders */
export const handleChangeOrder = (e, setOrder, updateHomeState) => {
	e.preventDefault();
	setOrder(e.target.value);
	updateHomeState({
		orderBy: e.target.value,
		sortBy: "asc",
	});
};

export const handleClickSort = (e, setSort, updateHomeState, order) => {
	e.preventDefault();
	let sort = e.target.value === "asc" ? "desc" : "asc";
	setSort({
		value: sort,
		order: order.toLowerCase(),
	});
	updateHomeState({ sortBy: sort });
};

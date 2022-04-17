/** Search Bar */
export const handleChange = (e, updateState) => {
	e.preventDefault();
	updateState({ [e.target.name]: e.target.value });
};

export const handleSubmit = (
	e,
	search,
	getCountries,
	resetSearchBarState,
	resetHomeState,
) => {
	e.preventDefault();
	search && getCountries(search);
	resetSearchBarState();
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
export const handleFilters = (
	e,
	filterBy,
	resetOrders,
	updateHomeState,
	actualRegion,
	actualActivity,
) => {
	e.preventDefault();

	let auxiliar = {};

	e.target.name === "actualRegion" &&
		(auxiliar = {
			...auxiliar,
			region: e.target.value,
			activity: actualActivity,
		});

	e.target.name === "actualActivity" &&
		(auxiliar = {
			...auxiliar,
			region: actualRegion,
			activity: e.target.value,
		});

	filterBy(auxiliar);

	updateHomeState({
		actualRegion: auxiliar.region,
		actualActivity: auxiliar.activity,
	});

	resetOrders();
};

/** Orders */
export const handleChangeOrder = (e, setOrder, updateHomeState) => {
	e.preventDefault();
	setOrder(e.target.value);
	updateHomeState({
		actualOrder: e.target.value,
		actualSort: "asc",
	});
};

export const handleClickSort = (e, setSort, updateHomeState, order) => {
	e.preventDefault();
	let sort = e.target.value === "asc" ? "desc" : "asc";
	setSort({
		value: sort,
		order: order.toLowerCase(),
	});
	updateHomeState({ actualSort: sort });
};

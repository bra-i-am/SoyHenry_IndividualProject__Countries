import validate from "./validations";

export const handleChangeInputs = (e, setInputs, inputs, setError) => {
	e.preventDefault();
	setInputs({
		...inputs,
		[e.target.name]: e.target.value,
	});

	if (typeof setError === "function") {
		setError(
			validate({
				...inputs,
				[e.target.name]: e.target.value,
			}),
		);
	}
};

export const handleAddCountries = (
	e,
	setInputs,
	inputs,
	setterError = null,
	errors = null,
	countries,
) => {
	e.preventDefault();
	countries.includes(e.target.value) &&
		e.target.value.length &&
		!inputs.countries.includes(e.target.value) &&
		setInputs({
			...inputs,
			countries: [...inputs.countries, e.target.value],
		});
};

export const handleClickDeleteCountry = (e, setInputs, inputs) => {
	e.preventDefault();
	setInputs({
		...inputs,
		countries: inputs.countries.filter((el) => el !== e.target.name),
	});
};

export const handleSubmit = (e, inputs, dispatch, actions, history) => {
	const { postActivity, getCountries } = actions;

	e.preventDefault();
	const info = {
		...inputs,
		expertise: Number(inputs.expertise),
		duration: Number(inputs.duration),
	};
	setTimeout(() => {
		dispatch(postActivity(info));
		dispatch(getCountries());
	}, 500);

	alert("Activity created successfully.");
	history.push("/home");
};

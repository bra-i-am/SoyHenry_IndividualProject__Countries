import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../redux/actions";

import InputField from "./components/inputField/InputField";
import SelectField from "./components/selectField/SelectField";
import SearchCountries from "./components/searchCountries/SearchCountries";
import DisplayCountries from "./components/displayCountries/DisplayCountries";
import DisplayError from "./components/displayError/DisplayError";
import Loader from "../../components/complexLoader/Loader";

import "./createactivity.scss";

import {
	handleChangeInputs,
	handleAddCountries,
	handleClickDeleteCountry,
	handleSubmit,
} from "./utils/handlers";

export default function CreateActivity() {
	const history = useHistory();
	const dispatch = useDispatch();

	const countries = useSelector((state) => state.countriesReducer.countriesAux)
		.map((el) => el.name)
		.sort();

	const [errors, setErrors] = useState({});
	const errorAux =
		errors.name || errors.expertise || errors.duration ? true : false;

	const [inputs, setInputs] = useState({
		name: "",
		expertise: 0,
		duration: 0,
		season: "Any",
		countries: [],
	});

	useEffect(() => {
		!countries.length && dispatch(getCountries()); // eslint-disable-next-line
	}, []);

	return (
		<>
			{!countries.length ? (
				<Loader />
			) : (
				<form className="createActivity__container">
					<h3>Create a new</h3>
					<h1>Activity</h1>
					<div className="createActivity__container__fields">
						<div className="createActivity__container__fields__inputs">
							<InputField
								text="Name"
								id="name"
								type="text"
								value={inputs.name}
								handler={{
									func: handleChangeInputs,
									setterState: setInputs,
									state: inputs,
									setterError: setErrors,
									errors: errors,
								}}
							/>
							{errors.name ? <DisplayError error={errors.name} /> : <p></p>}

							<InputField
								text="Difficulty (1 - 5)"
								id="expertise"
								type="number"
								value={inputs.expertise}
								handler={{
									func: handleChangeInputs,
									setterState: setInputs,
									state: inputs,
									setterError: setErrors,
									errors: errors,
								}}
								max={5}
								min={1}
							/>
							{errors.expertise ? (
								<DisplayError error={errors.expertise} />
							) : (
								<p></p>
							)}

							<InputField
								text="Duration (hours aprox.)"
								id="duration"
								type="number"
								value={inputs.duration}
								handler={{
									func: handleChangeInputs,
									setterState: setInputs,
									state: inputs,
									setterError: setErrors,
									errors: errors,
								}}
								max={5}
								min={1}
							/>
							{errors.duration ? (
								<DisplayError error={errors.duration} />
							) : (
								<p></p>
							)}

							<SelectField
								name="season"
								id="season"
								stateLinked={inputs.season}
								handler={{
									func: handleChangeInputs,
									setterState: setInputs,
									state: inputs,
								}}
								options={["Any", "Summer", "Autumn", "Winter", "Spring"]}
							/>
						</div>

						<div className="createActivity__container__fields__countries">
							<SearchCountries
								selectedCountries={inputs.countries}
								handler={{
									func: handleAddCountries,
									setterState: setInputs,
									state: inputs,
									countries: countries,
								}}
							/>

							{inputs.countries && (
								<DisplayCountries
									countries={inputs.countries}
									handler={{
										func: handleClickDeleteCountry,
										setterState: setInputs,
										state: inputs,
									}}
								/>
							)}
						</div>
					</div>
					<button
						className={
							!inputs.name || errorAux
								? "createActivity__container__button--disabled"
								: "createActivity__container__button"
						}
						disabled={!inputs.name || errorAux}
						type="submit"
						onClick={(e) =>
							handleSubmit(
								e,
								inputs,
								dispatch,
								{ postActivity, getCountries },
								history,
							)
						}
					>
						Create activity
					</button>
				</form>
			)}
		</>
	);
}

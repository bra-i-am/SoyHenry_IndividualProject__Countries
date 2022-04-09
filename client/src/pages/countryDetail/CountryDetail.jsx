import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
	getCountry,
	resetCountry,
	getAllActivities,
	getCountries,
} from "../../redux/actions";

import ShowInfo from "./components/showInfo/ShowInfo";
import ShowActivities from "./components/showAndDeleteActivities/ShowAndDeleteActivities";
import PutActivities from "./components/putActivities/PutActivities";

function CountryDetail() {
	const [activityAdded, setActivityAdded] = useState(false);
	const [activityDeleted, setActivityDeleted] = useState(false);

	const dispatch = useDispatch();
	const { id } = useParams();

	const country = useSelector((state) => state.countriesReducer.country);
	const countries = useSelector((state) => state.countriesReducer.countries);

	useEffect(() => {
		!countries.length && dispatch(getCountries());
		dispatch(getAllActivities());

		return () => {
			dispatch(resetCountry());
		}; // eslint-disable-next-line
	}, []);

	useEffect(() => {
		setTimeout(() => {
			dispatch(getCountry(id));
		}, 500); // eslint-disable-next-line
	}, [activityAdded]);

	useEffect(() => {
		setTimeout(() => {
			dispatch(getCountry(id));
		}, 500); // eslint-disable-next-line
	}, [activityDeleted]);

	return (
		<div>
			{Object.keys(country).length ? (
				<div>
					<ShowInfo country={country} />
					<PutActivities
						countryName={country.name}
						setActivityAdded={setActivityAdded}
						activityAdded={activityAdded}
					/>
					<ShowActivities
						country={country}
						activities={country.activities}
						activityDeleted={activityDeleted}
						setActivityDeleted={setActivityDeleted}
					/>
				</div>
			) : (
				"LOADING ON COUNTRY DETAIL"
			)}
		</div>
	);
}

export default CountryDetail;

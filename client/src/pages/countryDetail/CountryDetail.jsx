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
import Loader from "../../components/complexLoader/Loader";

import "./countrydetail.scss";

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
		<div className="countryDetail__container">
			{Object.keys(country).length ? (
				<div className="countryDetail__container__content">
					<ShowInfo country={country} />
					<div className="countryDetail__container__content--info">
						<ShowActivities
							country={country}
							activities={country.activities}
							activityDeleted={activityDeleted}
							setActivityDeleted={setActivityDeleted}
						/>
						<PutActivities
							countryName={country.name}
							setActivityAdded={setActivityAdded}
							activityAdded={activityAdded}
						/>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</div>
	);
}

export default CountryDetail;

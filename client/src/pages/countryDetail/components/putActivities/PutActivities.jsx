import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putActivity, getCountries } from "../../../../redux/actions";

import "./putactivities.scss";

function PutActivities({ countryName, setActivityAdded, activityAdded }) {
	const dispatch = useDispatch();

	const [showSearch, setShowSearch] = useState(false);
	const [activitySelected, setActivitySelected] = useState("");

	const activities = useSelector((state) => state.activitiesReducer.activities);

	const handleShowAddClick = (e) => {
		e.preventDefault();
		showSearch ? setShowSearch(false) : setShowSearch(true);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setActivitySelected(e.target.value);
	};

	const handleAddClick = (e) => {
		e.preventDefault();
		setActivityAdded(!activityAdded);
		dispatch(
			putActivity({
				activity: activitySelected,
				action: "add",
				country: countryName,
			}),
		);
		dispatch(getCountries());
		showSearch ? setShowSearch(false) : setShowSearch(true);
	};

	return (
		<div className="putActivities__container">
			{showSearch ? (
				<button
					className="putActivities__container--exit"
					onClick={handleShowAddClick}
				>
					X
				</button>
			) : (
				<button
					className="putActivities__container--add"
					id="addCountry"
					onClick={handleShowAddClick}
					disabled={!activities.length && true}
				>
					Add activity
				</button>
			)}

			{showSearch && activities.length > 0 ? (
				<div className="putActivities__container__searchActivity">
					<label htmlFor={"activities"}>Activities</label>
					<input
						placeholder="Which activity...?"
						name={"activities"}
						id={"activities"}
						type={"search"}
						value={activitySelected}
						onChange={handleChange}
						list={"ActivitiesList"}
					/>

					<button onClick={handleAddClick} type="submit">
						Add
					</button>

					<datalist id={"ActivitiesList"}>
						{activities.map((el, idx) => (
							<option key={`${el}${idx}`} value={el} />
						))}
					</datalist>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default PutActivities;

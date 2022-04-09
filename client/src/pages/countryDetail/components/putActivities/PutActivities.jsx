import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putActivity, getCountries } from "../../../../redux/actions";

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
		<>
			{showSearch ? (
				<button onClick={handleShowAddClick}>X</button>
			) : (
				<button
					id="addCountry"
					onClick={handleShowAddClick}
					disabled={!activities.length && true}
				>
					Add activity
				</button>
			)}

			{showSearch && activities.length > 0 ? (
				<div>
					<label htmlFor={"activities"}>Activities</label>
					<input
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
		</>
	);
}

export default PutActivities;

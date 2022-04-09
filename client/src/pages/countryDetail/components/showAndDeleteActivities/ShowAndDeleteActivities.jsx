import React from "react";
import { useDispatch } from "react-redux";

import { putActivity, getCountries } from "../../../../redux/actions";

function ShowActivities({
	country,
	activities,
	activityDeleted,
	setActivityDeleted,
}) {
	const dispatch = useDispatch();

	const handleDeleteClick = (e, el) => {
		e.preventDefault();
		setActivityDeleted(!activityDeleted);
		dispatch(
			putActivity({
				activity: el.name,
				action: "remove",
				country: country.name,
			}),
		);
		dispatch(getCountries());
	};

	return (
		<>
			{activities.length ? <p>Touristic activities: </p> : ""}
			{activities.length
				? activities.map((el, idx) => {
						return (
							<div key={`${el.name}${idx}`}>
								<button onClick={(e) => handleDeleteClick(e, el)}>X</button>
								<h2>{el.name}</h2>
								<p>Difficulty: {el.expertise}</p>
								<p>Duration: {el.duration}</p>
								<p>Season: {el.season}</p>
							</div>
						);
				  })
				: ""}
		</>
	);
}

export default ShowActivities;

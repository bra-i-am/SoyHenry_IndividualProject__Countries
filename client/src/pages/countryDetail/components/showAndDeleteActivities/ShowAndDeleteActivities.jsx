import React from "react";
import { useDispatch } from "react-redux";

import { putActivity, getCountries } from "../../../../redux/actions";

import "./showndelete.scss";

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
			{activities.length ? (
				<div className="showAndDelete__container">
					<h3 className="showAndDelete__container__tag">
						Touristic activities
					</h3>

					{activities.map((el, idx) => {
						return (
							<div
								className="showAndDelete__container__activity"
								key={`${el.name}${idx}`}
							>
								<h2 className="showAndDelete__container__activity__name">
									{el.name}
									<button
										className="showAndDelete__container__activity--delete"
										onClick={(e) => handleDeleteClick(e, el)}
									>
										DELETE
									</button>
								</h2>
								<div className="showAndDelete__container__activity__info">
									<span className="showAndDelete__container__activity__info__subtitle">
										Difficulty:
									</span>
									<h3>{el.expertise} of 5</h3>
								</div>
								<div className="showAndDelete__container__activity__info">
									<span className="showAndDelete__container__activity__info__subtitle">
										Duration:
									</span>
									<h3>{el.duration} hours aprox.</h3>
								</div>
								<div className="showAndDelete__container__activity__info">
									<span className="showAndDelete__container__activity__info__subtitle">
										Season:
									</span>
									<h3>{el.season}</h3>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}
		</>
	);
}

export default ShowActivities;

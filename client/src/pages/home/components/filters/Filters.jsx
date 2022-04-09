import React, { Component } from "react";

import { handleRegionChange, handleActivityChange } from "../../utils/handlers";

import "./filter.scss";

export default class Filters extends Component {
	render() {
		const regions = Array.from(
			new Set(
				Array.isArray(this.props.countriesAux)
					? this.props.countriesAux.map((country) => country.region)
					: [],
			),
		);

		return (
			<div className="filters__container">
				{typeof this.props.countries === "string" ? (
					""
				) : (
					<div className="filters__container__continent">
						<label htmlFor="regions">Continent</label>
						<select
							id="regions"
							onChange={(e) =>
								handleRegionChange(
									e,
									this.props.filterRegion,
									this.props.filterActivity,
									this.props.updateHomeState,
									this.props.resetOrders,
								)
							}
							value={this.props.actualRegion}
						>
							<option value="All">All</option>
							{regions.map((region, idx) => {
								return (
									<option key={`${region}${idx}`} value={region}>
										{region}
									</option>
								);
							})}
						</select>
					</div>
				)}

				{typeof this.props.countries === "string" ||
				!this.props.activities.length ? (
					""
				) : (
					<div className="filters__container__activities">
						<label htmlFor="activities">Activities</label>
						<select
							id="activities"
							onChange={(e) =>
								handleActivityChange(
									e,
									this.props.filterActivity,
									this.props.resetOrders,
									this.props.updateHomeState,
								)
							}
							value={this.props.actualActivity}
						>
							<option value="All">All</option>
							{this.props.activities?.map((activity, idx) => {
								return (
									<option key={`${activity}${idx}`} value={activity}>
										{activity}
									</option>
								);
							})}
						</select>
					</div>
				)}
			</div>
		);
	}
}

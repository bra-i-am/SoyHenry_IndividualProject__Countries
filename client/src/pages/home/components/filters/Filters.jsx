import React, { Component } from "react";

import { handleFilters } from "../../utils/handlers";

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
							name="actualRegion"
							value={this.props.actualRegion}
							onChange={(e) =>
								handleFilters(
									e,
									this.props.filterBy,
									this.props.resetOrders,
									this.props.updateHomeState,
									this.props.actualRegion,
									this.props.actualActivity,
								)
							}
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
							name="actualActivity"
							value={this.props.actualActivity}
							onChange={(e) =>
								handleFilters(
									e,
									this.props.filterBy,
									this.props.resetOrders,
									this.props.updateHomeState,
									this.props.actualRegion,
									this.props.actualActivity,
								)
							}
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

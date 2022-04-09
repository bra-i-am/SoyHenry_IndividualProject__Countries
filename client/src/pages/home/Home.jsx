import React, { Component } from "react";
import { connect } from "react-redux";

import {
	getActivities,
	getCountries,
	resetCountries,
	order,
	sort,
	filterRegion,
	filterActivity,
} from "../../redux/actions";

import SeachBar from "./components/searchbar/SeachBar";
import Filters from "./components/filters/Filters";
import Sort from "./components/sort/Sort";
import Content from "./components/content/Content";

import "./home.scss";

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activityFilter: "All",
			regionFilter: "All",
			orderBy: "name",
			sortBy: "asc",
		};

		this.updateState = this.updateState.bind(this);
		this.resetState = this.resetState.bind(this);
		this.resetOrders = this.resetOrders.bind(this);
	}

	updateState(changes) {
		this.setState((prevState) => {
			return {
				...prevState,
				...changes,
			};
		});
	}

	resetState() {
		this.setState((prevState) => {
			return {
				...prevState,
				activityFilter: "All",
				regionFilter: "All",
				orderBy: "name",
				sortBy: "asc",
			};
		});
	}

	resetOrders() {
		this.setState((prevState) => {
			return {
				...prevState,
				orderBy: "name",
				sortBy: "asc",
			};
		});
	}

	componentDidMount() {
		if (!this.props.countries.length) this.props.getCountries();

		if (
			this.props.countries.length &&
			typeof this.props.countries !== "string"
		) {
			this.props.order("name");
			this.props.getActivities();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.countries !== prevProps.countries) {
			if (!this.props.countries.length) this.props.getCountries();

			if (typeof this.props.countries !== "string") {
				this.props.countries.length > 1 && this.props.order("name");
				this.props.getActivities();
			}
		}
	}

	render() {
		return (
			<div className="home__container">
				<SeachBar
					getCountries={this.props.getCountries}
					countries={this.props.countries}
					resetCountries={this.props.reset}
					resetHomeState={this.resetState}
					updateHomeState={this.updateState}
				/>

				<Filters
					countries={this.props.countries}
					countriesAux={this.props.countriesAux}
					activities={this.props.activities}
					filterRegion={this.props.filterRegion}
					filterActivity={this.props.filterActivity}
					actualRegion={this.state.regionFilter}
					actualActivity={this.state.activityFilter}
					resetOrders={this.resetOrders}
					updateHomeState={this.updateState}
				/>

				{typeof this.props.countries !== "string" &&
					this.props.countries.length > 1 && (
						<Sort
							setOrder={this.props.order}
							setSort={this.props.sort}
							actualOrder={this.state.orderBy}
							actualSort={this.state.sortBy}
							updateHomeState={this.updateState}
						/>
					)}

				{typeof this.props.countries === "string" ? (
					<div className="home__error__containerEmpty">
						<p>
							Nothing was found, please reset or change your searching values.
						</p>
					</div>
				) : (
					<Content countries={this.props.countries} />
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { countries, countriesAux, regionsFiltered } = state.countriesReducer;
	const { activities } = state.activitiesReducer;

	return {
		countries,
		countriesAux,
		regionsFiltered,
		activities,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getCountries: (name) => dispatch(getCountries(name)),
		getActivities: () => dispatch(getActivities()),
		filterRegion: (region) => dispatch(filterRegion(region)),
		filterActivity: (activity) => dispatch(filterActivity(activity)),
		order: (by) => dispatch(order(by)),
		sort: (by) => dispatch(sort(by)),
		reset: () => dispatch(resetCountries()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from "react";
import { connect } from "react-redux";

import {
	getActivities,
	getCountries,
	resetCountries,
	order,
	sort,
	filterBy,
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
			actualActivity: "All",
			actualRegion: "All",
			actualOrder: "name",
			actualSort: "asc",
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
				actualActivity: "All",
				actualRegion: "All",
				actualOrder: "name",
				actualSort: "asc",
			};
		});
	}

	resetOrders() {
		this.setState((prevState) => {
			return {
				...prevState,
				actualOrder: "name",
				actualSort: "asc",
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
					resetCountries={this.props.resetCountries}
					resetHomeState={this.resetState}
				/>

				<Filters
					countries={this.props.countries}
					countriesAux={this.props.countriesAux}
					activities={this.props.activities}
					filterBy={this.props.filterBy}
					actualRegion={this.state.actualRegion}
					actualActivity={this.state.actualActivity}
					resetOrders={this.resetOrders}
					updateHomeState={this.updateState}
				/>

				{typeof this.props.countries !== "string" &&
					this.props.countries.length > 1 && (
						<Sort
							setOrder={this.props.order}
							setSort={this.props.sort}
							actualOrder={this.state.actualOrder}
							actualSort={this.state.actualSort}
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
	const { countries, countriesAux } = state.countriesReducer;
	const { activities } = state.activitiesReducer;

	return {
		countries,
		countriesAux,
		activities,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getCountries: (name) => dispatch(getCountries(name)),
		getActivities: () => dispatch(getActivities()),
		// filterRegion: (region) => dispatch(filterRegion(region)),
		// filterActivity: (activity) => dispatch(filterActivity(activity)),
		filterBy: (payload) => dispatch(filterBy(payload)),
		order: (by) => dispatch(order(by)),
		sort: (by) => dispatch(sort(by)),
		resetCountries: () => dispatch(resetCountries()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";

import { getCountries, sort } from "../../redux/actions";
import "./landingPage.scss";

export class LandingPage extends Component {
	componentDidMount() {
		this.props.getCountries();
	}

	render() {
		return (
			<div className="landing">
				<div className="landing_container">
					<div className="landing_container__title">
						<h3>WELCOME TO</h3>
						<h1>COUNTRIES</h1>
					</div>
					{this.props.countries.length ? (
						<Link to="/home">
							<button className="landing_container__button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="44"
									height="44"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="#f7fffe"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M3 5v14l8 -7z" />
									<path d="M14 5v14l8 -7z" />
								</svg>
							</button>
						</Link>
					) : (
						<button className="landing_container__button--disabled" disabled>
							<Loader />
						</button>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { countries } = state.countriesReducer;
	return { countries };
}

function mapDispatchToProps(dispatch) {
	return {
		getCountries: () => dispatch(getCountries()),
		sort: (order) => dispatch(sort(order)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

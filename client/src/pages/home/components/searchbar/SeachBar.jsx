import React, { Component } from "react";

import { handleChange, handleSubmit, handleReset } from "../../utils/handlers";

import "./searchbar.scss";

export class SeachBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		};

		this.updateState = this.updateState.bind(this);
		this.resetState = this.resetState.bind(this);
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
				search: "",
			};
		});
	}

	render() {
		return (
			<div className="searchbar__container">
				<input
					className="searchbar__container__input"
					placeholder="Wanna see any country?"
					type="text"
					name="search"
					value={this.state.search}
					onChange={(e) => handleChange(e, this.updateState)}
				/>

				<button
					className="searchbar__container__submit"
					type="submit"
					onClick={(e) =>
						handleSubmit(
							e,
							this.state.search,
							this.props.getCountries,
							this.resetState,
							this.props.resetHomeState,
						)
					}
				>
					<span>Search </span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#f7fffe"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<circle cx="10" cy="10" r="7" />
						<line x1="21" y1="21" x2="15" y2="15" />
					</svg>
				</button>

				<div className="searchbar__container__reset">
					{!this.props.countries.length ? (
						""
					) : (
						<button
							className="searchbar__container__reset__button"
							type="reset"
							onClick={(e) =>
								handleReset(
									e,
									this.resetState,
									this.props.resetCountries,
									this.props.resetHomeState,
								)
							}
						>
							Reset
						</button>
					)}
				</div>
			</div>
		);
	}
}

export default SeachBar;

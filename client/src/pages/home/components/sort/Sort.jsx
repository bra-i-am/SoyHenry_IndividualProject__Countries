import React, { Component } from "react";

import { handleChangeOrder, handleClickSort } from "../../utils/handlers";

import "./sort.scss";

export default class Sort extends Component {
	render() {
		return (
			<div className="sort__container">
				<div className="sort__container__orderby">
					<label htmlFor="orderBy">Order by: </label>
					<select
						name="orderBy"
						id="orderBy"
						value={this.props.actualOrder}
						onChange={(e) =>
							handleChangeOrder(
								e,
								this.props.setOrder,
								this.props.updateHomeState,
							)
						}
					>
						<option value="name">Name</option>
						<option value="population">Population</option>
						<option value="area">Area</option>
					</select>
				</div>

				<label className="sort__container__sortby">
					<input
						type={"submit"}
						value={this.props.actualSort}
						onClick={(e) =>
							handleClickSort(
								e,
								this.props.setSort,
								this.props.updateHomeState,
								this.props.actualOrder,
							)
						}
					/>
					{this.props.actualSort === "asc" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="#ac6c3c"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="4" y1="6" x2="11" y2="6" />
							<line x1="4" y1="12" x2="11" y2="12" />
							<line x1="4" y1="18" x2="13" y2="18" />
							<polyline points="15 9 18 6 21 9" />
							<line x1="18" y1="6" x2="18" y2="18" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="#ac6c3c"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="4" y1="6" x2="13" y2="6" />
							<line x1="4" y1="12" x2="11" y2="12" />
							<line x1="4" y1="18" x2="11" y2="18" />
							<polyline points="15 15 18 18 21 15" />
							<line x1="18" y1="6" x2="18" y2="18" />
						</svg>
					)}
				</label>
			</div>
		);
	}
}

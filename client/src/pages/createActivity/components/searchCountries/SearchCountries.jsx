import { useState, useEffect } from "react";

import InputField from "../inputField/InputField";

import "./searchCountries.scss";

function SearchCountries({ selectedCountries, handler }) {
	const { func, setterState, state, countries } = handler;

	const [showSearch, setShowSearch] = useState(false);

	useEffect(() => {
		setShowSearch(false);
	}, [selectedCountries]);

	const handleClick = (e) => {
		e.preventDefault();
		showSearch ? setShowSearch(false) : setShowSearch(true);
	};

	return (
		<div className="searhCountries__container">
			<label className="searhCountries__container__label">
				Add a country:{" "}
			</label>
			{showSearch ? (
				<button
					className="searhCountries__container__button--exit"
					onClick={handleClick}
				>
					X
				</button>
			) : (
				<button
					className="searhCountries__container__button--add"
					id="addCountry"
					onClick={handleClick}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="#ac6c3c"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<line x1="12" y1="5" x2="12" y2="19" />
						<line x1="5" y1="12" x2="19" y2="12" />
					</svg>
				</button>
			)}

			{showSearch && (
				<InputField
					text="Search countries"
					id="countries"
					type="search"
					handler={{
						func,
						setterState,
						state,
						countries,
					}}
					dataList={countries}
				/>
			)}
		</div>
	);
}

export default SearchCountries;

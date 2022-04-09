import React from "react";

import Card from "./component/card/Card";
import ComplexLoader from "../../../../../../components/complexLoader/Loader";

import "./cards.scss";

function Cards({ countries }) {
	return (
		<div className="cards__container">
			{!countries.length ? (
				<ComplexLoader />
			) : (
				countries.map((country) => {
					return (
						<Card
							key={`${country.name}${country.id}`}
							id={country.id}
							name={country.name}
							flag={country.flag}
							region={country.region}
						/>
					);
				})
			)}
		</div>
	);
}

export default Cards;

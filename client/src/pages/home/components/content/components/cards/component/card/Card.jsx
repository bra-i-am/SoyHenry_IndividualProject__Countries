import React from "react";
import { Link } from "react-router-dom";

import "./card.scss";

function card({ id, name, flag, region }) {
	return (
		<div className="card__container">
			<Link to={`/country/${id}`}>
				<img
					className="card__container__flag"
					src={flag}
					alt={`${name} flag`}
				/>
			</Link>
			<div className="card__container__info">
				<Link className="card__container__info__link" to={`/country/${id}`}>
					<h2 className="card__container__info__link__name">{name}</h2>
				</Link>
				<h3 className="card__container__info__continent">{region}</h3>
			</div>
		</div>
	);
}

export default card;

/**
id: "URY"
name: "Oriental Republic of Uruguay"
flag: "https://flagcdn.com/uy.svg"
region: "Americas"
capital: "Montevideo"
subregion: "South America"
area: 181034
population: 3473727
activities
 */

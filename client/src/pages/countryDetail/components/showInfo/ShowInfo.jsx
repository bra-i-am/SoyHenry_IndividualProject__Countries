import React from "react";

import "./showInfo.scss";

function ShowInfo({ country }) {
	return (
		<div className="showInfo__container">
			<div className="showInfo__container__img">
				<img src={country.flag} alt={`${country.name} flag`} width={"100%"} />
			</div>
			<div>
				<div className="showInfo__container__text">
					<h1>{country.name}</h1>
					<div className="showInfo__container__text__container">
						<span className="showInfo__container__text__container__title">
							Continent:
						</span>
						<h3>{country.region}</h3>
					</div>
					<div className="showInfo__container__text__container">
						<span className="showInfo__container__text__container__title">
							Country code:
						</span>
						<h3>{country.id}</h3>
					</div>
					<div className="showInfo__container__text__container">
						<span className="showInfo__container__text__container__title">
							Capital:
						</span>
						<h3>{country.capital}</h3>
					</div>
					<div className="showInfo__container__text__container">
						<span className="showInfo__container__text__container__title">
							Sub-region:
						</span>
						<h3>{country.subregion}</h3>
					</div>
					<div className="showInfo__container__text__container">
						<span className="showInfo__container__text__container__title">
							Area:
						</span>
						<h3>
							{country.area.toLocaleString()} km<sup>2</sup>
						</h3>
					</div>
					<div className="showInfo__container__text__container">
						<span className="showInfo__container__text__container__title">
							Population:
						</span>
						<h3>{country.population.toLocaleString()} people</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShowInfo;

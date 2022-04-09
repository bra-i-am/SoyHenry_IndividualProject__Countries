import React from "react";

function ShowInfo({ country }) {
	return (
		<>
			<div>
				<img src={country.flag} alt={`${country.name} flag`} width={"100%"} />
			</div>
			<div>
				<div>
					<h1>{country.name}</h1>
					<p>Continent: {country.region}</p>
					<p>Country code: {country.id}</p>
					<p>Capital: {country.capital}</p>
					<p>Sub-region: {country.subregion}</p>
					<p>
						Area: {country.area.toLocaleString()} km<sup>2</sup>
					</p>
					<p>Population: {country.population.toLocaleString()} people</p>
				</div>
			</div>
		</>
	);
}

export default ShowInfo;

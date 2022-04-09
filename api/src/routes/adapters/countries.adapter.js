async function adaptCountries(countries) {
	return await countries.map((country) => {
		return {
			id: country.cca3,
			name: country.name.official,
			flag: country.flags.svg,
			capital: country.capital ? country.capital.toString() : "N/A",
			region: country.region,
			subregion: country.subregion ? country.subregion : country.region,
			area: country.area,
			population: country.population,
		};
	});
}

module.exports = adaptCountries;

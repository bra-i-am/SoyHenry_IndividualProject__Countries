const getAPIcountries = require("../services/countriesApi.getter.service");
const { Country } = require("../../db");

async function setDDBBcountries() {
	const countries = await getAPIcountries();
	await countries?.forEach((country) =>
		Country.findOrCreate({
			where: {
				id: country.id,
				name: country.name,
				flag: country.flag,
				// capital: country.capital,
				region: country.region,
				// subregion: country.subregion,
				area: country.area,
				population: country.population,
			},
		}).catch((e) =>
			console.error({
				location: "findOrCreate on countriesDB setter service",
				message: e.message,
				error: {
					message: e.errors[0].message,
					value: e.errors[0].value,
					origin: e.errors[0].origin,
				},
			}),
		),
	);
}

module.exports = setDDBBcountries;

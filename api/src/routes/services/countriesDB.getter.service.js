const setDDBBcountries = require("../services/countriesDB.setter.service");
const { Country, Activity } = require("../../db");

async function getDDBBcountries(name) {
	if (name) {
		const countries = await Country.findAll({
			include: {
				model: Activity,
				through: {
					attributes: [],
				},
			},
		}).catch((e) =>
			console.error("FindAll countriesDB getter service.", e.message),
		);

		return countries.filter((el) =>
			el.name.toLowerCase().includes(name.toLowerCase()),
		);
	}

	await setDDBBcountries();
	return await Country.findAll({
		include: {
			model: Activity,
			through: {
				attributes: [],
			},
		},
	}).catch((e) =>
		console.error("FindAll countriesDB getter service.", e.message),
	);
}

module.exports = getDDBBcountries;

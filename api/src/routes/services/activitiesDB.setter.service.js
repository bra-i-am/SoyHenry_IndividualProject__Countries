const { Country, Activity } = require("../../db");

async function postDDBBactivity({
	name,
	expertise,
	duration,
	season,
	countries,
}) {
	const [newActivity, created] = await Activity.findOrCreate({
		where: { name, expertise, duration, season },
	}).catch((e) => console.log("FindOrCreate activitesDB setter:", e.message));

	if (countries.length) {
		// Take all the countries
		const countriesDB = await Country.findAll({
			where: { name: countries },
		}).catch((e) => console.log("FindAll activitesDB setter:", e.message));

		// Add countries to activities
		newActivity.addCountries(countriesDB);
	}

	return { created, countries };
}

module.exports = postDDBBactivity;

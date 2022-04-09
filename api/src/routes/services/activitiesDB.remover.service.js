const { Country, Activity } = require("../../db");

async function removeActivity(activityTo, action, fromCountry) {
	const activity = await Activity.findOne({
		where: { name: activityTo },
	}).catch((e) => console.log("Find Activity remover:", e.message));

	const country = await Country.findOne({
		where: { name: fromCountry },
		include: {
			model: Activity,
			through: {
				attributes: [],
			},
		},
	}).catch((e) => console.log("Find City remover:", e.message));

	// const country = await countries.filter(
	// 	(country) => country.name === fromCountry,
	// )[0];
	if (action === "remove") activity.removeCountry(country);
	if (action === "add") activity.addCountry(country);
}

module.exports = removeActivity;

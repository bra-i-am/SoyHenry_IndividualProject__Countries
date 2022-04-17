const { Country, Activity } = require("../../db");

async function updateActivity(activityTo, action, fromCountry) {
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

	if (action === "remove") activity.removeCountry(country);
	if (action === "add") activity.addCountry(country);
}

module.exports = updateActivity;

const { Country, Activity } = require("../../db");

async function getDDBBcountry(countryId) {
	return await Country.findOne({
		where: { id: countryId.toUpperCase() },
		include: {
			model: Activity,
			through: {
				attributes: [],
			},
		},
	});
}

module.exports = getDDBBcountry;

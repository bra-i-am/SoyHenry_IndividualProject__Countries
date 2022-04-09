const { Country, Activity } = require("../../db");

async function getDDBBactivities() {
	return await Activity.findAll();
}

module.exports = getDDBBactivities;

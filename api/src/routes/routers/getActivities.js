const getDDBBactivities = require("../services/activitiesDB.getter.service");

const { Router } = require("express");
const router = Router();

router.get("", async (req, res) => {
	const activities = await getDDBBactivities();

	res.status(200).send(activities);
});

module.exports = router;

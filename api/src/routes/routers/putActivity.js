const removeActivity = require("../services/activitiesDB.remover.service");

const { Router } = require("express");
const router = Router();

router.put("", async (req, res) => {
	const { activity, action, country } = req.body;
	await removeActivity(activity, action, country);

	res.send({ activity, action, country });
});

module.exports = router;

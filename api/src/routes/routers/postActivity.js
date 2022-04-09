const postDDBBactivity = require("../services/activitiesDB.setter.service");

const { Router } = require("express");
const router = Router();

router.post("", async (req, res) => {
	const { created, countries } = await postDDBBactivity(req.body);

	if (countries.length > 0) {
		const wasCreated = created
			? "was created with countries associated."
			: "already exists should had changes with countries associated";

		res.status(201).json({ msg: `Activity ${wasCreated}` });
	} else {
		const wasCreated = created
			? "was created."
			: "already exists should had changes.";

		res.status(201).json({ msg: `Activity ${wasCreated}` });
	}
});

module.exports = router;

const getDDBBcountry = require("../services/countryDB.getter.service");

const { Router } = require("express");
const router = Router();

router.get("/:countryId", async (req, res) => {
	const { countryId } = req.params;

	const countryFound = await getDDBBcountry(countryId);

	countryFound ? res.status(200).send(countryFound) : res.send("Not found");
});

module.exports = router;

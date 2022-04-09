const getDDBBcountries = require("../services/countriesDB.getter.service");

const { Router } = require("express");
const router = Router();

router.get("", async (req, res) => {
	const { name } = req.query;

	const countriesFound = name
		? await getDDBBcountries(name)
		: await getDDBBcountries();

	countriesFound.length > 0
		? res.status(200).send(countriesFound)
		: res.send("Not found");
});

module.exports = router;

const axios = require("axios");
const adaptCountries = require("../adapters/countries.adapter");

function getAPIcountries() {
	return axios
		.get("https://restcountries.com/v3.1/all")
		.then(({ data }) => adaptCountries(data))
		.catch((e) => console.log(e.message));
}

module.exports = getAPIcountries;

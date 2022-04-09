const { Router } = require("express");
const router = Router();

router.use("/countries", require("./routers/getCountries"));
router.use("/countries", require("./routers/getCountry"));
router.use("/activities", require("./routers/getActivities"));
router.use("/activities", require("./routers/postActivity"));
router.use("/activities", require("./routers/putActivity"));

module.exports = router;

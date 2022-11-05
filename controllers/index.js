const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");
const searchResultsRoutes = require("./search-results-routes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/results", searchResultsRoutes);

module.exports = router;

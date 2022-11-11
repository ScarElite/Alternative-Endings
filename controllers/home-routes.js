const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

router.get("/", (req, res) => {
  console.log("===============================");
  res.render("homepage");
});

module.exports = router;

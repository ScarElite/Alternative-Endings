const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  console.log("+++++++++++++++++++++++++++++");
  //   res.render("search-results");
});

router.get("/:title", (req, res) => {
  console.log("+++++++++++++++++++++++++++++");

  var userText = document.querySelector(".input");
  var input = userText.value.trim();

  const apiUrl =
    "https://api.themoviedb.org/3/movie/" +
    input +
    "&apiKey=" +
    process.env.API_KEY_1;

  console.log(input);

  fetch(apiUrl)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

  res.render("search-results");
});

module.exports = router;

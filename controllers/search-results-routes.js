const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  console.log("+++++++++++++++++++++++++++++");

  // const apiUrl =
  //   "https://api.themoviedb.org/3/movie/?&apiKey=" +
  //   process.env.API_KEY_1 +
  //   "&query=hello";

  // fetch(apiUrl)
  //   .then((data) => {
  //     console.log("MOVIE", data.body);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });

  res.render("search-results");
});

router.get("/:title", (req, res) => {
  console.log("+++++++++++++++++++++++++++++");
  console.log("THIS IS ", req.params.title);
  // var input = req.params.title;

  // var apiKey = process.env.API_KEY;

  fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=" +
      process.env.API_KEY +
      "&query=" +
      req.params.title
  )
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });

      res.render("search-results");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.render("search-results");
});

module.exports = router;

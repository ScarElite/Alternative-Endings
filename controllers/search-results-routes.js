const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  console.log("+++++++++++++++++++++++++++++");
  res.render("search-results");
});

router.get("/:title", (req, res) => {
  res.render("search-results");

  fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=6bc85f8dbf1308d71b9a884c52f062a1&query=" +
      req.params.title +
      "&language=en-US&page=1"
  )
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data.results);

        for (i = 0; i < data.results.length; i++) {
          console.log("MOVIE TITLE: ", data.results[i].title);
        }
        console.log("You searched for ", req.params.title);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

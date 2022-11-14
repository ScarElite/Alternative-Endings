const router = require("express").Router();

// GET upcoming movie data
router.get("/upcoming", (req, res) => {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
    process.env.API_KEY +
    "&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
        res.send(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET movies in theaters
router.get("/theaters", (req, res) => {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
    process.env.API_KEY +
    "&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
        res.send(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`;

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
        res.send(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/search/:searchterm", (req, res) => {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.params.searchterm}&page=1&include_adult=false`;

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
        res.send(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

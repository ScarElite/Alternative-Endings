const router = require("express").Router();

router.get("/upcoming", (req, res) => {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&page=1";

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

router.get("/something", (req, res) => {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=" +
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

module.exports = router;

const router = require("express").Router();

router.get("/something", (req, res) => {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=" +
    process.env.API_KEY +
    "&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        console.log("AAAAAAGGGGGGGGGGGHHHHHHHHHHH", data);
        res.send(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

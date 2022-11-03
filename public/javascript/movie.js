var apiKey = process.env.API_KEY_1;
var apiUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey;

fetch(apiUrl)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        if (data.results.length === 0) {
          console.log("No Data");
        } else {
          console.log(response.json(data));
        }
      });
    }
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

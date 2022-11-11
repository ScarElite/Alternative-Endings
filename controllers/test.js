function data() {
  const apiUrl =
    // Will be a new way to call the api and use a new apiKey. Will call through the backend so we can use process.env
    "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
    apiKey +
    "&language=en-US&page=1";
  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        return data;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = data;

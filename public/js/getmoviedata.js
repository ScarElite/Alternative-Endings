let apiUrl = `https://api.themoviedb.org/3/movie/${postMovieId}?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US`;

fetch(apiUrl)
  .then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      showMovieInfo(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });

function showMovieInfo(data) {
  const moviePoster = document.querySelector(".movieposter");
  document.querySelector(".movietitle").textContent = data.original_title;
  document.querySelector(".header-movie-title").textContent =
    data.original_title;
  moviePoster.innerHTML = `<img class="movieposterimg" src="https://image.tmdb.org/t/p/w185${data.poster_path}" />`;
  document.querySelector(".moviedescription").textContent = data.overview;
}

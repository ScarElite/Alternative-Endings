const apiUrl = `/movie-data/${postMovieId}`;

async function getSingleMovieData(url) {
  const response = await fetch(url);
  var data = await response.json();
  showSingleMovieData(data);
}
getSingleMovieData(apiUrl);

function showSingleMovieData(data) {
  const moviePoster = document.querySelector(".movieposter");
  document.querySelector(".movietitle").textContent = data.original_title;
  document.querySelector(".header-movie-title").textContent =
    data.original_title;
  moviePoster.innerHTML = `<img class="movieposterimg" src="https://image.tmdb.org/t/p/w185${data.poster_path}" />`;
  document.querySelector(".moviedescription").textContent = data.overview;
}

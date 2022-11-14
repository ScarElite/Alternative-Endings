function movieReview() {
  console.log("Movie Review!");

  const api_url = "/movie-data/review";

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log("SHOW ME THE REVIEW", data);
    showMovieInfo(data);
    moviedata.upcoming = data.results;
  }
  // Calling that async function
  getapi(api_url);
}

function showMovieInfo(data) {
  const moviePoster = document.querySelector(".movieposter");
  document.querySelector(".movietitle").textContent = data.original_title;
  document.querySelector(".header-movie-title").textContent =
    data.original_title;
  moviePoster.innerHTML = `<img class="movieposterimg" src="https://image.tmdb.org/t/p/w185${data.poster_path}" />`;
  document.querySelector(".moviedescription").textContent = data.overview;
}

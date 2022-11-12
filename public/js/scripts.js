let moviedata = {
  upcoming: [],
  intheaters: [],
};

function upcomingMovies() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        createUpcomingMovies(data);
        moviedata.upcoming = data.results;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function createUpcomingMovies(data) {
  var movieSliderEl = document.querySelector(".movieslider");
  for (i = 2; i < 10; i++) {
    // movieImgEl = $("<img></img>");
    // movieImgEl.attr("class", "movieimg");
    // movieImgEl.attr("src", "/assets/img/movies/1.jpeg");
    // movieSliderEl.append(movieImgEl);
    const movieItemEl = document.createElement("button");
    movieItemEl.classList.add("js-modal-trigger", "button-reset");
    movieItemEl.setAttribute("data-target", "modal-js-example");
    movieItemEl.innerHTML = `
    <img
      class="movieimg"
      src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
      alt="1"
      data-index="${i}"
    />`;
    movieSliderEl.appendChild(movieItemEl);
  }
  var slider = tns({
    container: ".movieslider",
    items: 6,
    gutter: 20,
    slideBy: "page",
    autoplay: false,
    loop: true,
  });
}

const inTheatersMovies = () => {
  const apiUrl = // Will be a new way to call the api and use a new apiKey. Will call through the backend so we can use process.env
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        createInTheatersMovies(data);
        moviedata.intheaters = data.results;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const createInTheatersMovies = (data) => {
  var movieSliderEl = document.querySelector(".intheatersnow");
  for (i = 0; i < 8; i++) {
    const movieItemEl = document.createElement("button");
    movieItemEl.classList.add("js-modal-trigger", "button-reset");
    movieItemEl.setAttribute("data-target", "modal-js-example");
    movieItemEl.innerHTML = `
    <img
      class="movieimg"
      src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
      alt="1"
      data-index="${i}"
    />`;
    movieSliderEl.appendChild(movieItemEl);
  }
  var slider = tns({
    container: ".intheatersnow",
    items: 6,
    gutter: 20,
    slideBy: 1,
    autoplay: false,
    pages: false,
    loop: true,
  });
};

const comingSoonTrigger = document.querySelector(".comingsoontriggers");
comingSoonTrigger.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  let choiceIndex = event.target.getAttribute("data-index");

  // Chooses the layout of the modal, passes in the in theaters movies into it as well as the index of the item that was clicked
  // and passes the value true to make sure that the write an alternative ending -button is disabled.
  handleModalContent("movieinfo", moviedata.upcoming, choiceIndex, true);
});

const inTheatersTrigger = document.querySelector(".intheaterstriggers");
inTheatersTrigger.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  let choiceIndex = event.target.getAttribute("data-index");

  // Chooses the layout of the modal, passes in the in theaters movies into it as well as the index of the item that was clicked
  // and passes the value false to make sure that the write an alternative ending -button is enabled.
  handleModalContent("movieinfo", moviedata.intheaters, choiceIndex, false);
});

const topBoxOffice = () => {
  console.log("Top Box Office Movies!");

  fetch("/test")
    .then((data) => {
      console.log("***************************************************", data);
    })
    .catch((err) => {
      console.log(err);
    });
};

upcomingMovies();
inTheatersMovies();
topBoxOffice();

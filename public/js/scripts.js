let moviedata = {
  upcoming: [],
  intheaters: [],
};

function upcomingMovies() {
  console.log("Upcoming Movies!");

  const api_url = "/movie-data/upcoming";

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log("SHOW ME UPCOMING MOVIES", data);
    createUpcomingMovies(data);
    moviedata.upcoming = data.results;
  }
  // Calling that async function
  getapi(api_url);
}

function createUpcomingMovies(data) {
  var movieSliderEl = document.querySelector(".movieslider");
  for (i = 2; i < 10; i++) {
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
  console.log("Upcoming Movies!");

  const api_url = "/movie-data/theaters";

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log("SHOW ME IN THEATERS MOVIES", data);
    createInTheatersMovies(data);
    moviedata.upcoming = data.results;
  }
  // Calling that async function
  getapi(api_url);
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

  const api_url = "/movie-data/something";

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log("SHOW ME THE DATA", data);
  }
  // Calling that async function
  getapi(api_url);
};

upcomingMovies();
inTheatersMovies();
topBoxOffice();

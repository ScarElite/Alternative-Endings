let moviedata = {
  upcoming: [],
  intheaters: []
}

function upcomingMovies() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        createUpcomingMovies(data);
        moviedata.upcoming = data.results
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function createUpcomingMovies(data) {
  var movieSliderEl = document.querySelector(".swiper-wrapper");
  for (i = 0; i < data.results.length; i++) {
    const movieItemEl = document.createElement("div");
    movieItemEl.classList.add("swiper-slide");
    movieItemEl.setAttribute("data-target", "modal-js-example");
    movieItemEl.innerHTML = `
    
    <div class="swiper-slide">
      <img
        class="movieimg"
        src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
        alt="${data.results[i].original_title}"
        data-index="${i}"
      />
    </div>
    
    `;
    movieSliderEl.appendChild(movieItemEl);
  }
}

const inTheatersMovies = () => {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        moviedata.intheaters = data.results
        createInTheatersMovies(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

function createInTheatersMovies(data) {
  var movieSliderEl = document.querySelector(".movies-comingsoon");
  for (i = 0; i < data.results.length; i++) {
    const movieItemEl = document.createElement("div");
    movieItemEl.classList.add("swiper-slide");
    movieItemEl.setAttribute("data-target", "modal-js-example");
    movieItemEl.innerHTML = `
    
    <div class="swiper-slide">
      <img
        class="movieimg"
        src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
        alt="${data.results[i].original_title}"
        data-index="${i}"
      />
    </div>
    
    `;
    movieSliderEl.appendChild(movieItemEl);
  }
}

function noSearchResults(query) {
  const modalEl = document.querySelector(".modal");
  const modalMain = document.querySelector(".modal-card-body");
  const modalTitle = document.querySelector(".modal-card-title");
  const modalFooter = document.querySelector(".modal-card-foot");

  // Modal title
  modalTitle.innerHTML = `No results for <strong>${query}</strong>.`

  // Modal Content
  modalMain.innerHTML = `
    <div class="is-flex is-justify-content-center">
        <img src="/assets/img/stock/facepalm-disappointed.gif"
    </div>
    `;

  // Modal Footer
  modalFooter.innerHTML = `
    <button class="button modalclose">Close</button>
    `

  const modalCloser = document.querySelector(".modal")
  const closeButtonEl = document.querySelector(".modalclose")
  document.querySelector(".modal-card").classList.replace("modal-movie", "modal-search")
  closeButtonEl.addEventListener("click", () => {
    modalCloser.classList.remove("is-active")
  })

  modalEl.classList.add("is-active");
}

const inTheatersTrigger = document.querySelector(".swiper-wrapper");
inTheatersTrigger.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  let choiceIndex = event.target.getAttribute("data-index")

  // Chooses the layout of the modal, passes in the in theaters movies into it as well as the index of the item that was clicked
  // and passes the value false to make sure that the write an alternative ending -button is enabled. 
  handleModalContent("movieinfo", moviedata.upcoming, choiceIndex, false);
});

const comingSoonTrigger = document.querySelector(".movies-comingsoon");
comingSoonTrigger.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  let choiceIndex = event.target.getAttribute("data-index")

  // Chooses the layout of the modal, passes in the in theaters movies into it as well as the index of the item that was clicked
  // and passes the value false to make sure that the write an alternative ending -button is enabled. 
  handleModalContent("movieinfo", moviedata.intheaters, choiceIndex, false);
});

upcomingMovies();
inTheatersMovies();
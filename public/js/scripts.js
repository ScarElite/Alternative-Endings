function upcomingMovies() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        // console.log(data.results);
        createUpcomingMovies(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function createUpcomingMovies(data) {
  // console.log("UPCOMING MOVIES");
  // console.log(data);

  var movieSliderEl = $(".movieslider");

  // Set i to equal 2 because the first 2 results in the array are movies in the "In theaters now" api call
  for (i = 2; i < 10; i++) {
    // console.log("MOVIE TITLE: ", data.results[i].title);

    // movieBtnEl = $("<button></button>");
    // movieBtnEl.attr("class", "js-modal-trigger button-reset");
    // movieBtnEl.attr("data-target", "modal-js-example");

    movieImgEl = $("<img></img>");
    movieImgEl.attr("class", "movieimg");
    movieImgEl.attr("src", "/assets/img/movies/1.jpeg");
    movieSliderEl.append(movieImgEl);
  }
}

function inTheatersMovies() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&page=1";

  fetch(apiUrl)
    .then(function (response) {
      response.json().then(function (data) {
        // console.log(data.results);
        createInTheatersMovies(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function createInTheatersMovies(data) {
  // console.log("IN THEATERS MOVIES");
  // console.log(data);

  var movieSliderEl = document.querySelector(".intheatersnow");

  for (i = 0; i < 8; i++) {
    // console.log("MOVIE TITLE: ", data.results[i].title);

    // // movieBtnEl = $("<button></button>");
    // // movieBtnEl.attr("class", "js-modal-trigger button-reset");
    // // movieBtnEl.attr("data-target", "modal-js-example");

    // movieImgEl = $("<img></img>");
    // movieImgEl.attr("class", "movieimg");
    // // This is the movie image that the api comes back with but isn't able to display because it's calling an asset from its data
    // // movieImgEl.attr("src", data.results[].backdrop_path);
    // movieImgEl.attr("src", "/assets/img/movies/2.jpeg");
    // movieSliderEl.append(movieImgEl);
    const movieItemEl = document.createElement("button");
    movieItemEl.classList.add("js-modal-trigger", "button-reset");
    movieItemEl.setAttribute("data-target", "modal-js-example");
    movieItemEl.innerHTML = `
    <img
      class="movieimg"
      src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
      alt="1"
    />`;
    movieSliderEl.appendChild(movieItemEl);
  }
}

var slider = tns({
  container: ".movieslider",
  items: 6,
  gutter: 20,
  slideBy: "page",
  autoplay: false,
  loop: true,
});

var slider = tns({
  container: ".intheatersnow",
  items: 6,
  gutter: 20,
  slideBy: 1,
  autoplay: false,
  pages: false,
  loop: true,
});

const quotes = [
  "Human beings love stories because they safely show us beginnings, middles and ends. ~A. S. Byatt",
  "Our story has three parts: a beginning, a middle, and an end. And although this is the way all stories unfold, I still can’t believe that ours didn’t go on forever. ~Nicholas Sparks",
  "Every new beginning comes from some other beginning’s end. ~Seneca",
  "There is no real ending. It’s just the place where you stop the story. ~Frank Herbert",
  "I always had this idea that you should never give up a happy middle in the hopes of a happy ending, because there is no such thing as a happy ending. Do you know what I mean? There is so much to lose. ~John Green",
  "The opposite of the happy ending is not actually the sad ending–the sad ending is sometimes the happy ending. The opposite of the happy ending is actually the unsatisfying ending. ~Orson Scott Card",
  "Life is not so much about beginnings and endings as it is about going on and on and on. It is about muddling through the middle. ~Anna Quindlen",
  "The last thing one settles in writing a book is what one should put in first. ~Pascal",
];

function randomQuoteHandler() {
  const quoteEl = document.querySelector(".quote");
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

randomQuoteHandler();

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});

upcomingMovies();
inTheatersMovies();

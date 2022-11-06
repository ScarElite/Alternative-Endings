// Fixes the Uncaught ReferenceError: process is not defined
// const NODE_ENV = process.env.NODE_ENV;

function searchResults(event) {
  event.preventDefault();

  var userText = document.querySelector(".input");
  var input = userText.value.trim();
  console.log(input);

  // var apiKey = process.env.API_KEY;

  // fetch(
  //   "https://api.themoviedb.org/3/search/movie?api_key=" + process.env.API_KEY +"&query=" +
  //     input
  // )
  //   .then(function (response) {
  //     response
  //       .json()
  //       .then(function (data) {
  //         console.log(data);
  //       })
  //       .then(function () {
  //         document.location.replace("/results/" + input);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  fetch(`/results/` + input, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    document.location.replace("/results");
  });

  // const response = fetch(`/results/` + input, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (response.ok) {
  //   document.location.replace("/results");
  // } else {
  //   alert(response.statusText);
  // }
}

document
  .querySelector("#search-form")
  .addEventListener("submit", searchResults);

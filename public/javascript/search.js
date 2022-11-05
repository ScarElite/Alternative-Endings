function searchResults(event) {
  event.preventDefault();

  var userText = document.querySelector(".input");
  var input = userText.value.trim();
  console.log(input);

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.API_KEY_V4,
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const apiUrl =
    "https://api.themoviedb.org/3/movie/?&apiKey=" +
    process.env.API_KEY +
    "&query=hello";

  fetch(apiUrl, options)
    .then((data) => {
      console.log("MOVIE", data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

  // const response = await fetch(`/results`, {
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

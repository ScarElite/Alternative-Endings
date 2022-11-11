async function searchResults(event) {
  event.preventDefault();
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

  var userText = document.querySelector(".input");
  var input = userText.value.trim();
  console.log(input);

  if (!input) {
    alert("You need to search for something!");
  } else {
    document.location.replace("/results/" + input);
  }
}

document
  .querySelector(".search-form")
  .addEventListener("submit", searchResults);

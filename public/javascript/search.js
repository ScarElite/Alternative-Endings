async function searchResults(event) {
  event.preventDefault();

  const response = await fetch(`/results`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/results");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#search-form")
  .addEventListener("submit", searchResults);

async function searchResults(event) {
  event.preventDefault();

  console.log("{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{");
  // document.location.replace("/search");

  // const title = document.querySelector('input[name="post-title"]').value;
  // const post_url = document.querySelector('input[name="post-url"]').value;

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

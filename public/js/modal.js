const handleModalContent = (layout, data) => {
  switch (layout) {
    case "movieinfo":
      showMovieInfo();
      break;

    case "searchresults":
      showSearchResults();
      break;

    case "closemodal":
      modalEl.classList.remove("is-active");
      break;

    default:
      break;
  }
};

const comingSoonTrigger = document.querySelector(".comingsoontriggers");
comingSoonTrigger.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  handleModalContent("movieinfo");
});

const inTheatersTrigger = document.querySelector(".intheaterstriggers");
inTheatersTrigger.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  handleModalContent("movieinfo");
});

const modalBackground = document.querySelector(".modal-background");

// modalBackground.addEventListener("click", handleModalContent("closemodal"));

document.querySelector(".moviesearch").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let searchterm = document.querySelector(".moviesearch").value.trim();

    let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&query=${searchterm}&page=1&include_adult=false`;

    fetch(apiUrl)
      .then(function (response) {
        response.json().then(function (data) {
          showSearchResults(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

function showSearchResults(data) {
  let modalEl = document.querySelector(".modal");
  const modalContent = `
<div class="modal-background"></div>

    <div class="modal-content">
        <div class="box">

            <p class="is-size-4">Write an Alternative Ending or Review</p>
            <p class="subheading mb-2">All Alternative Endings Have Spoilers <i class="fas fa-exclamation-triangle"></i></p>
            <ul class="searchresults"></ul>

        </div>

    </div>
</div>

<button class="modal-close is-large" aria-label="close"></button>
`;

  modalEl.innerHTML = modalContent;

  let searchResultsEl = document.querySelector(".searchresults");

  for (let i = 0; i < 5; i++) {
    let searchresultitem = document.createElement("li");
    searchresultitem.textContent = data.results[i].original_title;
    searchResultsEl.appendChild(searchresultitem);
  }

  modalEl.classList.add("is-active");
}

function showMovieInfo() {
  let modalEl = document.querySelector(".modal");
  const modalContent = `
      <div class="modal-background"></div>
      <div class="modal-content">
      <div class="box">
      <p class="is-size-4">Write an Alternative Ending or Review</p>
      <p class="subheading mb-2">All Alternative Endings Have Spoilers <i class="fas fa-exclamation-triangle"></i></p>
      <ul class="searchresults"></ul>
      <ol class="is-size-4 ml-6 mb-4">
      <li class="movie-img">
      Insert image here
      </li>
      <li>
      Title:
      </li>
      <li>
      Release Day:
      </li>
      </ol>
      <div class="box has-background-link-light">
      <form class="new-post-form mb-4">
      <div class="mb-3">
        <div class="field">
          <label for="post-title" class="label is-size-5">Alternative Ending Title</label>
          <div class="control">
            <input type="text" name="post-title" class=" input is-info" id="post-title" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="field">
          <label for="post-content" class="label is-size-5">Content</label>
          <div class="control">
            <textarea type="text" name="post-content" class="form-control post-content mb-3 input is-info"
              id="post-content"></textarea>
          </div>
          <div class="control">
            <button type="submit" class="button is-normal is-info">Save My Ending</button>
          </div>
        </div>
      </div>
      </form>
      <form class="new-post-form">
      <div class="mb-3">
        <div class="field">
          <label for="post-title" class="label is-size-5" id="original_title">Movie<Title></Title></label>
          <div class="control">
            <input type="text" name="post-title" class=" input is-info" id="post-title" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="field">
          <label for="post-content" class="label is-size-5" id="content">Review Content</label>
          <div class="control">
            <textarea type="text" name="post-content" class="form-control post-content mb-3 input is-info"
              id="post-content"></textarea>
          </div>
          <div class="control">
            <button type="submit" class="button is-normal is-info">Save My Review</button>
          </div>
        </div>
      </div>
      </form>
      </div>
      </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
      `;

  modalEl.innerHTML = modalContent;
  modalEl.classList.add("is-active");
}

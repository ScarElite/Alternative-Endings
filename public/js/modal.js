let modal = `
<div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <p class="is-size-4">Write an Alternative Ending or Review</p>
        <p class="subheading mb-2">All Alternative Endings Have Spoilers</p>
        <ul class="searchresults"></ul>
        <ol class="is-size-4 ml-6 mb-4">
          <li class="movie-img">Insert image here</li>
          <li>Title:</li>
          <li>Release Day:</li>
        </ol>
        <div class="box has-background-link-light">
          <form class="new-post-form mb-4">
            <div class="mb-3">
              <div class="field">
                <label for="post-title" class="label is-size-5">Alternative Ending Title</label>
                <div class="control">
                  <input type="text" name="post-title" class="input is-info" id="post-title">
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="field">
                <label for="post-content" class="label is-size-5">Content</label>
                <div class="control">
                  <textarea type="text" name="post-content" class="form-control post-content mb-3 input is-info" id="post-content"></textarea>
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
                <label for="post-title" class="label is-size-5" id="original_title">Movie</label>
                <div class="control">
                  <input type="text" name="post-title" class="input is-info" id="post-title">
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="field">
                <label for="post-content" class="label is-size-5" id="content">Review Content</label>
                <div class="control">
                  <textarea type="text" name="post-content" class="form-control post-content mb-3 input is-info" id="post-content"></textarea>
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
`;

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

const slider = document.querySelector(".modaltriggers");
slider.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }
  const modalEl = document.querySelector(".modal");
  modalEl.classList.add("is-active");
});

console.log("test");

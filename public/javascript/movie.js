async function movieModal(event) {
  event.preventDefault();

  console.log("Movie Clicked!!!!!");
}

document.querySelector(".upcoming-movie").addEventListener("click", movieModal);

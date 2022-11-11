// Chooses which modal to show
const handleModalContent = (layout, data, choiceIndex, comingsoon) => {
    switch (layout) {
        case "movieinfo":
            showMovieInfo(data, choiceIndex, comingsoon);
            break;

        case "searchresults":
            showSearchResults();
            break;

        case "closemodal":
            const modalEl = document.querySelector(".modal");
            modalEl.classList.remove("is-active");
            break;

        default:
            break;
    }
};

function showSearchResults(data, query) {
    const modalEl = document.querySelector(".modal");
    const modalMain = document.querySelector(".modal-card-body");
    const modalTitle = document.querySelector(".modal-card-title");
    const modalFooter = document.querySelector(".modal-card-foot");

    // Modal title
    modalTitle.textContent = `Search results for "${query}"`

    // Modal Content
    modalMain.innerHTML = `
    <div class="searchresultsgroup">
        
    </div>
    `;

    // Modal Footer
    modalFooter.innerHTML = `
    <button class="button modalclose">Close</button>
    `

    let searchResultsEl = document.querySelector(".searchresultsgroup");

    for (let i = 0; i < 5; i++) {
        let searchresultitem = document.createElement("div");
        searchresultitem.innerHTML = `
        
        <div class="is-flex searchresultsitem">
            <div class="mr-3">
                <img src="https://image.tmdb.org/t/p/w185${data.results[i].poster_path}" />
            </div>
            <div class="is-flex is-justify-content-space-between searchresultsitemtitle p-4">
                <div>
                    <p class="has-text-weight-bold is-size-5 mb-3">${data.results[i].original_title}</p>
                    <p class="is-subtitle mb-3 searchoverview">${data.results[i].overview}</p>
                    <a href="/login" class="button is-primary is-small">Log in to write an alternative ending</a>
                </div>
            </div>
        </div>
        
        `
        searchResultsEl.appendChild(searchresultitem);
    }

    const modalCloser = document.querySelector(".modal")
    const closeButtonEl = document.querySelector(".modalclose")
    document.querySelector(".modal-card").classList.replace("modal-movie", "modal-search")
    closeButtonEl.addEventListener("click", () => {
        modalCloser.classList.remove("is-active")
    })

    modalEl.classList.add("is-active");
}

function showMovieInfo(data, choiceIndex, comingsoon) {

    const modalEl = document.querySelector(".modal");
    const modalMain = document.querySelector(".modal-card-body");
    const modalTitle = document.querySelector(".modal-card-title");
    const modalFooter = document.querySelector(".modal-card-foot");

    // Modal title
    modalTitle.textContent = `${data[choiceIndex].original_title}`

    // Modal Content
    modalMain.innerHTML = `
    <div class="columns">
        <div class="column is-one-third">
            <img src="https://image.tmdb.org/t/p/w185${data[choiceIndex].poster_path}" alt="${data[choiceIndex].original_title}"/>
        </div>
        <div class="column">
            <h1 class="title">${data[choiceIndex].original_title}</h1>
            <p>${data[choiceIndex].overview}</p>
        </div>
    </div>
    `;

    // Modal Footer

    modalFooter.innerHTML = `
        <button class="button modalclose">Close</button>
        <a href="/login" class="button is-primary">Log in to write an alternative ending</a>
        `


    const modalCloser = document.querySelector(".modal")
    const closeButtonEl = document.querySelector(".modalclose")
    const modalSEl = document.querySelector(".modal-card").classList.replace("modal-search", "modal-movie")
    closeButtonEl.addEventListener("click", () => {
        modalCloser.classList.remove("is-active")
    })

    modalEl.classList.add("is-active");

}

const comingSoonTrigger = document.querySelector(".comingsoontriggers");
comingSoonTrigger.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "IMG";
    if (!isButton) {
        return;
    }

    let choiceIndex = event.target.getAttribute("data-index");

    // Chooses the layout of the modal, passes in the in theaters movies into it as well as the index of the item that was clicked
    // and passes the value true to make sure that the write an alternative ending -button is disabled. 
    handleModalContent("movieinfo", moviedata.upcoming, choiceIndex, true);
});

const inTheatersTrigger = document.querySelector(".intheaterstriggers");
inTheatersTrigger.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "IMG";
    if (!isButton) {
        return;
    }

    let choiceIndex = event.target.getAttribute("data-index")

    // Chooses the layout of the modal, passes in the in theaters movies into it as well as the index of the item that was clicked
    // and passes the value false to make sure that the write an alternative ending -button is enabled. 
    handleModalContent("movieinfo", moviedata.intheaters, choiceIndex, false);
});

document.querySelector(".moviesearch").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let searchterm = document.querySelector(".moviesearch").value.trim();

        let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&query=${searchterm}&page=1&include_adult=false`;

        fetch(apiUrl)
            .then(function (response) {
                response.json().then(function (data) {
                    showSearchResults(data, searchterm);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
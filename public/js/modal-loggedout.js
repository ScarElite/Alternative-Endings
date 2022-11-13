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
  
    if (comingsoon) {
        modalFooter.innerHTML = `
        <button class="button modalclose">Close</button>
        <button class="button is-primary tooltip" disabled>
            Write an alternative ending
            <span class="tooltiptext">Movie has not yet been released</span>
        </button>
        `
    } else {
        modalFooter.innerHTML = `
        <button class="button modalclose">Close</button>
        <a href="/login" class="button is-primary altending-btn">Log in to write an alternative ending</button>
        `
        document.querySelector(".altending-btn").addEventListener("click", () => {
            writeAlternativeEnding(data, choiceIndex);
        })
    }
  
    const modalCloser = document.querySelector(".modal")
    const closeButtonEl = document.querySelector(".modalclose")
    document.querySelector(".modal-card").classList.replace("modal-search", "modal-movie")
    closeButtonEl.addEventListener("click", () => {
        modalCloser.classList.remove("is-active")
    })
  
  
  
    modalEl.classList.add("is-active");
  
  }
function showSearchResults(data, query) {
    searchData = data
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
                <div class="searchiteminfo">
                    <p class="has-text-weight-bold is-size-5 mb-3">${data.results[i].original_title}</p>
                    <p class="is-subtitle mb-3 searchoverview">${data.results[i].overview}</p>
                    <button class="button is-primary is-small altending-btn" data-choiceindex="${i}" data-movieid="${data.results[i].id}">Write an alternative ending</button>
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

    btns = document.getElementsByClassName("altending-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let searchChoiceIndex = event.target.getAttribute("data-choiceindex");
            writeAlternativeEnding(data.results, searchChoiceIndex);
        });
    }

    modalEl.classList.add("is-active");
}

document.querySelector(".moviesearch").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let searchterm = document.querySelector(".moviesearch").value.trim();

        let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=6bc85f8dbf1308d71b9a884c52f062a1&language=en-US&query=${searchterm}&page=1&include_adult=false`;

        fetch(apiUrl)
            .then(function (response) {
                response.json().then(function (data) {
                    if(data.results.length) {
                        showSearchResults(data, searchterm);
                    } else {
                        noSearchResults(searchterm)
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
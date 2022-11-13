// Chooses which modal to show
const handleModalContent = (layout, data, choiceIndex, comingsoon) => {
    switch (layout) {
        case "movieinfo":
            showMovieInfo(data, choiceIndex, comingsoon);
            break;

        case "closemodal":
            const modalEl = document.querySelector(".modal");
            modalEl.classList.remove("is-active");
            break;

        default:
            break;
    }
};

function writeAlternativeEnding(data, choiceIndex) {
    const modalEl = document.querySelector(".modal");
    const modalMain = document.querySelector(".modal-card-body");
    const modalTitle = document.querySelector(".modal-card-title");
    const modalFooter = document.querySelector(".modal-card-foot");

    // Modal title
    modalTitle.innerHTML = `Alternative Ending for <span class="has-text-weight-semibold">${data[choiceIndex].original_title}</span>`

    // Modal Content
    modalMain.innerHTML = `
    <div class="columns">
        <div class="column is-one-third">
            <img src="https://image.tmdb.org/t/p/w185${data[choiceIndex].poster_path}" alt="${data[choiceIndex].original_title}"/>
        </div>
        <div class="column">
            <form action="submit" class="altendingform">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input alttitle" type="text" placeholder="Title for Your Ending">
                    </div>
                </div>
  
                <div class="field">
                    <label class="label">Your Ending</label>
                    <div class="control">
                        <textarea class="textarea altending" placeholder="Write your Alternative Ending here"></textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `;

    // Modal Footer

    modalFooter.innerHTML = `
        <button class="button modalclose">Cancel</button>
    `

    document.querySelector(".altendingform").addEventListener("submit", async (event) => {
        event.preventDefault();
        let title = document.querySelector(".altTitle").value.trim();
        let content = document.querySelector(".altending").value.trim();
        let movie_id = data[choiceIndex].id

        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                content,
                movie_id
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    })

    const modalCloser = document.querySelector(".modal")
    const closeButtonEl = document.querySelector(".modalclose")
    const modalSEl = document.querySelector(".modal-card").classList.replace("modal-search", "modal-movie")
    closeButtonEl.addEventListener("click", () => {
        modalCloser.classList.remove("is-active")
    })

    modalEl.classList.add("is-active");
}
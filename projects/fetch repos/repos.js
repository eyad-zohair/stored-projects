// Main Variables

let theInput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".get-button")
let reposData = document.querySelector(".show-data")

getButton.onclick = function () {
    getRepos()
}

// get repos function
function getRepos() {
    if (theInput.value == "") { // if value is empty
        reposData.innerHTML = "<span>Please Write GetHup User Name</span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((res) => res.json())
            .then((repos) => {
                // empty the container
                reposData.innerHTML = ""

                // loop on repos
                repos.forEach(repo => {
                    // create the main div
                    let mainDiv = document.createElement("div")

                    // create repo name text
                    let repoName = document.createTextNode(repo.name)

                    // append the text to main div
                    mainDiv.appendChild(repoName)

                    //create repo url
                    let theUrl = document.createElement('a')

                    // create repo URL text
                    let theUrlText = document.createTextNode("visit")

                    // append the url text
                    theUrl.appendChild(theUrlText)

                    // add the href
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`

                    // set attribute blank
                    theUrl.setAttribute('target', '_blank')

                    // add a, span container
                    let cont = document.createElement("div")
                    cont.className = "main-cont"

                    // append tag to the contianer
                    cont.appendChild(theUrl)

                    // create stars count span
                    let startsSpan = document.createElement("span")

                    // create the stars text
                    let starsText = document.createTextNode(`stars ${repo.stargazers_count}`)

                    // add stars text to stars span
                    startsSpan.appendChild(starsText)

                    // append stars count span to main div
                    cont.appendChild(startsSpan)

                    // add cont to maindiv
                    mainDiv.appendChild(cont)

                    // add class on mainDi
                    mainDiv.className = "repo-box"

                    // append the main div to the container
                    reposData.appendChild(mainDiv)
                });
            })
    }
}
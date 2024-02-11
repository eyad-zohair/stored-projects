function game() {
    const words = ["Hello", "Programming", "Code", "Javascript", "Town", "Country", "Testing", "Youtube", "Linkedin", "Twitter", "Github", "Leetcode", "Internet", "Python", "Scala", "Destructuring", "Paradigm", "Styling", "Cascade", "Documentation", "Coding", "Funny", "Working", "Dependencies", "Task", "Runner", "Roles", "Test", "Rust", "Playing"];

    // setting levels
    const lvls = {
        "Easy": 6,
        "Normal": 4,
        "Hard": 3
    }

    // global
    let qCount = 0

    // Default Level
    let defaultLevelName = "Normal";
    let defaultLevelSeconds = lvls[defaultLevelName];

    //Change Level From Here

    let settings = document.querySelector(".level i")
    settings.onclick = sett


    // catch selectors 
    let startButton = document.querySelector(".start");
    let lvlNameSpan = document.querySelector(".message .lvl");
    let secondsSpan = document.querySelector(".message .seconds");
    let theWord = document.querySelector(".the-word");
    let upcomingWords = document.querySelector(".upcoming-words");
    let input = document.querySelector(".input");
    let timeLeftSpan = document.querySelector(".time span");
    let scoreGot = document.querySelector(".score .got");
    let scoreTotal = document.querySelector(".score .total");
    let finishMessage = document.querySelector(".finish");
    let best = document.querySelector(".best span")

    let buttons = document.querySelectorAll(".overlay button")
    let firstDiv = document.querySelector(".overlay")
    buttons.forEach((butt) => {
        butt.onclick = function () {
            defaultLevelName = butt.getAttribute("data-diff")
            lvlNameSpan.innerHTML = defaultLevelName
            defaultLevelSeconds = lvls[defaultLevelName];
            lvlNameSpan.innerHTML = defaultLevelName;
            secondsSpan.innerHTML = defaultLevelSeconds;
            timeLeftSpan.innerHTML = defaultLevelSeconds;
            scoreTotal.innerHTML = words.length;
            if (localStorage.getItem("score")) {
                best.innerHTML = localStorage.getItem("score")
            }
            firstDiv.remove()
        }
    })
    // // setting lvl name + seconds + score
    // lvlNameSpan.innerHTML = defaultLevelName;
    // secondsSpan.innerHTML = defaultLevelSeconds;
    // timeLeftSpan.innerHTML = defaultLevelSeconds;
    // scoreTotal.innerHTML = words.length;
    // best.innerHTML = localStorage.getItem("score")

    // Disaple past event
    input.onpaste = function () {
        return false;
    }

    // start game
    startButton.onclick = function () {
        this.style.display = "none";
        input.focus()
        // generate word function
        genWords()

    }
    function sett() {
        let overlay = document.createElement("div")
        let settingDiv = document.createElement("div")
        let settingH2 = document.createElement("h2")
        let deffCont = document.createElement("div")
        let defecultTitle = document.createElement("h3")
        let form = document.createElement("form")
        let save = document.createElement("button")
        let hards = ["Easy", "Normal", "Hard"]
        for (let i = 0; i < 3; i++) {
            let radio = document.createElement("input")
            radio.setAttribute("type", "radio")
            radio.setAttribute("id", `deff-${i + 1}`)
            radio.setAttribute("name", "deff")
            radio.setAttribute("data-name", hards[i])
            if (radio.getAttribute("data-name") === defaultLevelName) {
                radio.checked = true
            }

            let serv = document.createElement("label")

            serv.setAttribute("for", `deff-${i + 1}`)
            serv.innerHTML = hards[i]
            serv.className = "choice"
            serv.style.cssText = `margin-left: 5px; width: 100%; display: block; padding: 20px; display: flex; flex: 1; border-radius: 10px; position: relative; cursor: pointer; justify-content: center; align-items: center;`
            form.appendChild(radio)
            form.appendChild(serv)
        }
        let x = document.createElement("p")
        x.innerHTML = "X"
        save.innerHTML = "save"
        defecultTitle.innerHTML = "difficulity"

        overlay.style.cssText = "width: 100%; height: 100%; background-color: rgba(0 0 0 /70%); position: fixed; top: 0; left: 0;"
        settingDiv.style.cssText = `position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: white; width: 450px; height: 350px; border-radius: 10px;`
        settingH2.style.cssText = `padding-top: 10px; margin: 0 auto; width: fit-content; font-size: 30px; font-weight: bold; margin-bottom: 10px;`
        form.style.cssText = "display: flex; width: 100%;"
        deffCont.style.cssText = `display: flex; margin: 0 10px;`
        x.style.cssText = `top: -10px; right: -10px; background-color: red; position: absolute; border-radius: 50%; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; color: white; cursor: pointer;`
        save.style.cssText = `background-color: var(--main-color); color: white; border: none; padding: 10px 20px; border-radius: 6px; position: absolute; right: 10px; bottom: 10px; font-size: 25px; cursor: pointer;`
        defecultTitle.style.cssText = `margin: 0 0 10px 20px; font-size: 25px;`

        settingH2.innerHTML = "Settings"

        deffCont.appendChild(form)
        settingDiv.appendChild(settingH2)
        settingDiv.appendChild(defecultTitle)
        settingDiv.appendChild(deffCont)
        settingDiv.appendChild(x)
        settingDiv.appendChild(save)
        overlay.appendChild(settingDiv)
        document.body.appendChild(overlay)

        x.onclick = function () {
            overlay.remove()
        }
        save.onclick = function () {
            let value = document.querySelector("input:checked").getAttribute("data-name")
            defaultLevelName = value
            lvlNameSpan.innerHTML = defaultLevelName
            defaultLevelSeconds = lvls[defaultLevelName];
            secondsSpan.innerHTML = defaultLevelSeconds;
            timeLeftSpan.innerHTML = defaultLevelSeconds;
            overlay.remove()
        }
    }
    function endGame(message, score) {
        if (localStorage.getItem("tasks")) {
            if (scoreGot.innerHTML > localStorage.getItem("score")) {
                localStorage.setItem("score", scoreGot.innerHTML)
            }
        } else {
            localStorage.setItem("score", scoreGot.innerHTML)
        }
        upcomingWords.remove()
        let overlay = document.createElement("div")
        let settingDiv = document.createElement("div")
        let settingH2 = document.createElement("h2")
        let defecultTitle = document.createElement("h3")
        let row = document.createElement("div")
        let prog = document.createElement("span")
        let retry = document.createElement("button")

        overlay.style.cssText = "width: 100%; height: 100%; background-color: rgba(0 0 0 /70%); position: fixed; top: 0; left: 0;"
        settingDiv.style.cssText = `padding: 20px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: white; width: 450px; height: 350px; border-radius: 10px;`
        settingH2.style.cssText = `padding-top: 10px; margin: 0 auto; width: fit-content; font-size: 30px; font-weight: bold; margin-bottom: 10px;`
        defecultTitle.style.cssText = `font-size: 20px;`
        row.style.cssText = `width: 100%; height: 40px; background-color: #ddd; margin-top: 10px;`
        prog.style.cssText = `display: block; height: 100%; background-color: var(--main-color); width: ${(scoreGot.innerHTML / scoreTotal.innerHTML) * 100}%`
        retry.style.cssText = `width: 100%; margin-top: 10px; height: 40px; border: none; background-color: var(--main-color); color: white; font-size: 30px; cursor: pointer;`

        settingH2.innerHTML = message
        retry.innerHTML = "retry"
        defecultTitle.innerHTML = `Your Score Is <span class = ${score}>${scoreGot.innerHTML}</span>/<span style = "color: #009688">${scoreTotal.innerHTML}</span>`

        retry.onclick = function () {
            location.reload()
        }

        row.appendChild(prog)
        settingDiv.appendChild(settingH2)
        settingDiv.appendChild(defecultTitle)
        settingDiv.appendChild(row)
        settingDiv.appendChild(retry)
        overlay.appendChild(settingDiv)
        document.body.appendChild(overlay)
    }
    function genWords() {
        // Get Random Word From Array
        let randomWord = words[Math.floor(Math.random() * words.length)]
        // Get Word Index 
        let wordIndex = words.indexOf(randomWord)
        // Remove Word From Array
        words.splice(wordIndex, 1);
        // show random word word
        theWord.innerHTML = randomWord
        // Empty Upcoming Words
        upcomingWords.innerHTML = "";
        // Generate Upcoming words
        for (let i = 0; i < words.length; i++) {
            // create div element 
            let div = document.createElement("div")
            div.innerHTML = words[i]
            upcomingWords.appendChild(div)
        }
        // call play function 
        startPlay()
    }
    function startPlay() {
        if (qCount === 0) {
            timeLeftSpan.innerHTML = defaultLevelSeconds + 3
        } else {
            timeLeftSpan.innerHTML = defaultLevelSeconds
        }
        // timeLeftSpan.innerHTML = defaultLevelSeconds
        let start = setInterval(() => {
            timeLeftSpan.innerHTML--;
            if (timeLeftSpan.innerHTML === "0") {
                // stop timer 
                clearInterval(start)
                // compare Words
                if (theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
                    // empty input field
                    input.value = "";
                    // incrase score
                    scoreGot.innerHTML++;
                    if (words.length > 0) {
                        genWords()
                    } else {
                        endGame("Game Finished", "good")
                    }
                } else {
                    endGame("Game Over", "bad")
                }
            }
        }, 1000);
        qCount++
    }
}
game()
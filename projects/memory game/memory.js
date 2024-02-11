let yourName = document.querySelector(".cont input")
let countDownElement = document.querySelector('.timer')
let leaderBoard = document.querySelector(".leader-board")
document.getElementById("start").addEventListener("click", function (event) {
    event.preventDefault()
    timer(120)
    if (yourName.value == "") {
        document.querySelector(".name span").innerHTML = "guest";
    } else {
        document.querySelector(".name span").innerHTML = yourName.value;
    }
    document.querySelector(".control-buttons").remove()
})

function game() {
    let triesElement = document.querySelector('.tries span');
    let duration = 1000;

    let blocksContainer = document.querySelector(".memory-game-blockes");
    let blocks = Array.from(blocksContainer.children);
    let orderRange = [...Array(blocks.length).keys()];
    shuffle(orderRange)

    // Add order css property
    blocks.forEach((block, index) => {
        block.style.order = orderRange[index];

        // add click event 
        block.addEventListener("click", function () {
            if (triesElement.innerHTML <= 0) {
                blocksContainer.classList.add("no-clicking")
                endGame()
            } else {
                flipBlock(block)
            }
        }
        )
    })

    // flip block function
    function flipBlock(selectedBlock) {
        // add class
        selectedBlock.classList.add('is-flipped')

        // collect all flipped parts
        let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'))

        // if there is 2 selected blocks
        if (allFlippedBlocks.length === 2) {
            // stop clicking function
            stopClicking()
            // check matched block function
            checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])
        }
    }
    // shuffle function
    function shuffle(array) {
        // settings vars
        let current = array.length,
            temp,
            random;
        while (current > 0) {
            // get radom number
            random = Math.floor(Math.random() * current)

            // decrease length by 1
            current--;

            // save current element i nstash
            temp = array[current]
            // current element = random element
            array[current] = array[random];
            // random element = get element from stash
            array[random] = temp;
        }
        return array
    }

    // stop clicking function
    function stopClicking() {
        // Add class no clicking on main container
        blocksContainer.classList.add("no-clicking")
        setTimeout(() => {
            // remove class noclicking ater duration
            blocksContainer.classList.remove("no-clicking")
        }, duration);
    }

    // check matched block function
    function checkMatchedBlocks(firstBlock, secondBlock) {
        if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
            firstBlock.classList.remove('is-flipped')
            secondBlock.classList.remove('is-flipped')

            firstBlock.classList.add('has-match')
            secondBlock.classList.add('has-match')
            let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('has-match'))
            if (allFlippedBlocks.length === blocksContainer.children.length) {
                leader()
                clearInterval(timerInterval)
                blocksContainer.classList.add("no-clicking")
                let finalDiv = document.createElement("div")
                let insideFinal = document.createElement("div")
                let finalSpan = document.createElement("span")
                let scoreP = document.createElement("p")
                let restart = document.createElement("button")
                let viewScore = document.createElement("button")

                finalSpan.innerHTML = "You won"
                scoreP.innerHTML = `Your Score Is ${triesElement.innerHTML}/30`
                restart.innerHTML = "Restart"
                viewScore.innerHTML = "View Leader Board"

                finalDiv.style.cssText = "position: fixed; left: 0; top: 0; background-color: rgba(0 0 0 / 70%); width: 100%; height: 100%;"
                insideFinal.style.cssText = "display: flex; flex-direction: column; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
                finalSpan.style.cssText = "color: #f44336; font-size: 40px; text-align: center;"
                scoreP.style.cssText = "color: #f6f6f6; text-align: center; margin: 10px 0; font-size: 25px; "
                restart.style.cssText = "background-color: #f44336; border: none; color: white; padding: 10px 20px; border-radius: 6px; font-size: 20px; cursor: pointer"
                viewScore.style.cssText = "background-color: #f44336; border: none; color: white; padding: 10px 20px; border-radius: 6px; font-size: 20px; cursor: pointer; margin-top: 10px;"

                restart.onclick = function () {
                    location.reload()
                }
                viewScore.onclick = function () {
                    finalDiv.remove()
                    scrollTo({
                        left: 0,
                        top: 1000,
                        behavior: "smooth",
                    })
                }

                insideFinal.appendChild(finalSpan)
                insideFinal.appendChild(scoreP)
                insideFinal.appendChild(restart)
                insideFinal.appendChild(viewScore)
                finalDiv.appendChild(insideFinal)
                document.body.appendChild(finalDiv)
            }

            document.getElementById("sucsess").play()
        } else {
            setTimeout(() => {
                firstBlock.classList.remove('is-flipped')
                secondBlock.classList.remove('is-flipped')
                triesElement.innerHTML = parseInt(triesElement.innerHTML) - 1
            }, duration);
            document.getElementById("fail").play()
        }
    }
}
function endGame() {
    leader()
    clearInterval(timerInterval)
    let finalDiv = document.createElement("div")
    let insideFinal = document.createElement("div")
    let finalSpan = document.createElement("span")
    let restart = document.createElement("button")
    let viewScore = document.createElement("button")

    finalSpan.innerHTML = "Game Over"
    restart.innerHTML = "Restart"
    viewScore.innerHTML = "View Leader Board"

    finalDiv.style.cssText = "position: fixed; left: 0; top: 0; background-color: rgba(0 0 0 / 70%); width: 100%; height: 100%;"
    insideFinal.style.cssText = "display: flex; flex-direction: column; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
    finalSpan.style.cssText = "color: #f44336; font-size: 40px;"
    restart.style.cssText = "background-color: #f44336; border: none; color: white; padding: 10px 20px; border-radius: 6px; font-size: 20px; cursor: pointer;"
    viewScore.style.cssText = "background-color: #f44336; border: none; color: white; padding: 10px 20px; border-radius: 6px; font-size: 20px; cursor: pointer; margin-top: 10px;"

    restart.onclick = function () {
        location.reload()
    }
    viewScore.onclick = function () {
        finalDiv.remove()
        scrollTo({
            left: 0,
            top: 1000,
            behavior: "smooth",
        })
    }

    insideFinal.appendChild(finalSpan)
    insideFinal.appendChild(restart)
    insideFinal.appendChild(viewScore)
    finalDiv.appendChild(insideFinal)
    document.body.appendChild(finalDiv)
}
function timer(time) {
    let minutes, seconds
    timerInterval = setInterval(() => {
        minutes = parseInt(time / 60);
        seconds = parseInt(time % 60);

        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        countDownElement.innerHTML = `${minutes}:${seconds}`;
        if (--time < 0) {
            clearInterval(timerInterval)
            endGame()
        }
    }, 1000);
}
function leader() {
    localStorage.setItem(document.querySelector(".name span").innerHTML, document.querySelector(".tries span").innerHTML)
    let namesStor = []
    for (let i = 0; i < localStorage.length; i++) {
        namesStor[i] = [parseInt(localStorage.getItem(localStorage.key(i))), (localStorage.key(i))];
    }
    namesStor.sort(([a, b], [c, d]) => c - a || b - d)
    for (let i = 0; i < namesStor.length; i++) {
        if (namesStor.length <= 10) {
            let nameCont = document.createElement("div")
            let name = document.createElement("span")
            let score = document.createElement("span")

            name.innerHTML = `<span>${i + 1}</span>-${namesStor[i][1]}`
            score.innerHTML = `${namesStor[i][0]}/30`

            nameCont.appendChild(name)
            nameCont.appendChild(score)

            leaderBoard.style.cssText = "background-color: #e0e0e0;"

            leaderBoard.appendChild(nameCont)
        }
    }
    let restart = document.createElement("button")
    restart.innerHTML = "Restart"
    restart.onclick = function () {
        location.reload()
    }
    restart.style.cssText = "color: #fff; background-color: #f44336; padding: 6px 25px; text-align: center; cursor: pointer; border: none; display: block; width: 100%; font-size: 30px;"
    leaderBoard.appendChild(restart)
}
game()

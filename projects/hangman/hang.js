// a
const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters
let lettersArray = new Set(letters);

// select letters container
let lettersConatiner = document.querySelector(".letters");

// generate letters
lettersArray.forEach(letter => {
    // Create span
    let span = document.createElement("span")
    // Create letter
    let theLetter = document.createTextNode(letter)
    // append the letter to the span
    span.appendChild(theLetter)
    // add class to the span
    span.className = "letter-box"
    // append span to to the letters container
    lettersConatiner.appendChild(span)
});

// Objects of words + categories
const words = {
    programing: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "intersteller", "whiplash", "memento", "coco", "up"],
    countries: ["syria", "palastine", "yemen", "egypt", "bahrain", "qatar", "moroco", "france", "algeria", "spain", "america"],
    subjects: ["math", "science", "arabic", "english", "french", "german", "social studies"]
}

// get random property

let allkeys = Object.keys(words);

//random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allkeys.length);

// Category
let randomPropName = allkeys[randomPropNumber];

//category words
let randomPropValue = words[randomPropName];

//random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// the chosen word
let randomValueName = randomPropValue[randomValueNumber];

// set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters Guess element
let lettersGuessContainer = document.querySelector(".letters-guess");

// convert chosen word to array
let lettersAndSpace = Array.from(randomValueName);


// create spans depend on word
lettersAndSpace.forEach(letter => {
    //create empty span
    let emptyspan = document.createElement("span")
    // if letter is space
    if (letter === " ") {
        //add class to span
        emptyspan.className = 'with-space'
    }
    // append spans to letters-guess container
    lettersGuessContainer.appendChild(emptyspan)
})
let spans = Array.from(document.querySelectorAll(".letters-guess span"))
// select huess span
let guessSpans = document.querySelectorAll(".letters-guess span")


// set wrong attemps
let wrongAttemps = 0

// select draw element
let theDraw = document.querySelector(".hangman-draw")

// Handle clicking on letters
document.addEventListener("click", (e) => {
    // Set the chose status
    let theStatus = false;
    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked")
        // Get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase()
        // console.log(lettersAndSpace)
        lettersAndSpace.forEach((wordLetter, wordindex) => {
            //if the clicked letter equal to one of the chosen word letter
            if (theClickedLetter == wordLetter) {
                //set the status correct
                theStatus = true;
                // loop on all guess spans
                guessSpans.forEach((span, spanIndex) => {
                    if (wordindex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                        span.classList.add("finished")
                    };
                });
            };
        });
        // outside loop

        // if letter is wrong
        if (theStatus !== true) {
            // increase the wrong attemps
            wrongAttemps++

            //add class wrong to draw elements
            theDraw.classList.add(`wrong-${wrongAttemps}`)
            // play fail sound
            document.getElementById("fail").play()
            if (wrongAttemps === 8) {
                endgame(`Game Over, The Word Is:${randomValueName}`);
                lettersConatiner.classList.add("finished")
            }
        } else {
            // play sucsses sound
            document.getElementById("sucsess").play()
        }

    }
    let allFinishedSpans = spans.filter(flippedBlock => flippedBlock.classList.contains('finished'))
    if (allFinishedSpans.length === spans.length) {
        endgame(`You Got It`)
    }
})

// end game function
function endgame(word) {
    // father div 
    let fathDiv = document.createElement("div")
    fathDiv.style.cssText = "width: 100%; height: 100%; top: 0; left: 0; position: fixed; background-color: rgba(0 0 0 / 70%)"
    // create popup div 
    let retry = document.createElement("button")
    retry.onclick = function () {
        location.reload()
    }
    retry.innerHTML = "Retry"
    retry.style.cssText = `background-color: #f8f8f8; border: none; padding: 5px 20px; font-size: 30px; margin-top: 10px; width: calc(100% - 20px); cursor: pointer;`
    let div = document.createElement("div")
    // create text
    let divText = document.createTextNode(word)
    // append text to div
    div.appendChild(divText)
    div.appendChild(retry)
    // add class on div
    div.className = "popap";
    // append div to father 
    fathDiv.appendChild(div)
    // append to body
    document.body.appendChild(fathDiv)
}
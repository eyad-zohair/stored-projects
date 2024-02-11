// select elements
let quizApp = document.querySelector(".quiz-app")
quizApp.style.display = "none"
let countSpan = document.querySelector(".count span");
let bulletsSpanContainer = document.querySelector(".bullets .spans")
let quizArea = document.querySelector(".quiz-area")
let answersArea = document.querySelector(".answers-area")
let submitButtom = document.querySelector(".submit-button")
let bullets = document.querySelector(".bullets")
let countDownElement = document.querySelector(".countdown")

// set options 
let currentIndex = 0
let rightAnswer = 0
let countdownInterval

function getQuestions(questionsFile) {
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let qcount = questionsObject.length;

            // create bullets + set questions count
            createBullets(qcount)

            // add question Data
            addQuestionsData(questionsObject[currentIndex], qcount);

            //  start countdown
            countdown(60, qcount)

            // click on submit
            submitButtom.onclick = () => {
                // get right answer
                let theRightAnswer = questionsObject[currentIndex].right_answer

                // increase current index
                currentIndex++

                // check the answer
                checkAnswer(theRightAnswer, qcount)

                // remove old question
                quizArea.innerHTML = " "
                answersArea.innerHTML = " "

                // add question date
                addQuestionsData(questionsObject[currentIndex], qcount)

                // handle bullets class
                handleBullets();

                //  start countdown
                clearInterval(countdownInterval)
                countdown(60, qcount)

                // show results
                showResults(qcount);
            };
        };
    };
    myRequest.open("GET", questionsFile, true);
    myRequest.send();
};

function createBullets(num) {
    countSpan.innerHTML = num

    // create spans
    for (let i = 0; i < num; i++) {
        // create span
        let theBullet = document.createElement("span");

        if (i === 0) {
            theBullet.className = "on"
        }
        // append bullets to main bullet container
        bulletsSpanContainer.appendChild(theBullet)
    };
};

function addQuestionsData(obj, count) {
    if (currentIndex < count) {
        // create H2 Question
        let questionTitle = document.createElement("h2");

        // create Question text
        let questionText = document.createTextNode(obj.title);

        // append text to h2
        questionTitle.appendChild(questionText);

        // append h2 to quiz area
        quizArea.appendChild(questionTitle);

        // create the answers
        for (let i = 1; i <= 4; i++) {
            // create main answer div
            let mainDiv = document.createElement("div");

            // add class to main div
            mainDiv.className = "answer";

            // create radio input
            let radioInput = document.createElement("input");

            // add type + name + id + data-Atribute
            radioInput.name = "question";
            radioInput.type = "radio";
            radioInput.id = `answer_${i}`;
            radioInput.dataset.answer = obj[`answer_${i}`];

            if (i === 1) {
                radioInput.checked = true
            }

            // create label
            let theLabel = document.createElement("label");

            // add for attribute
            theLabel.htmlFor = `answer_${i}`;

            // create label text
            let theLabelText = document.createTextNode(obj[`answer_${i}`]);

            // add the text to label
            theLabel.appendChild(theLabelText)

            // append input + label to main div
            mainDiv.appendChild(radioInput)
            mainDiv.appendChild(theLabel)

            // append mainDiv the answers area
            answersArea.appendChild(mainDiv)
        };
    }
};

function checkAnswer(rAnswer, count) {
    let answers = document.getElementsByName("question");
    let theChosenAnswer;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            theChosenAnswer = answers[i].dataset.answer
        }
    }

    if (rAnswer === theChosenAnswer) {
        rightAnswer++
    }
};

function handleBullets() {
    let bulletsSpans = document.querySelectorAll(".bullets .spans span")
    let arrayOfSpan = Array.from(bulletsSpans)
    arrayOfSpan.forEach((span, index) => {
        span.classList.remove("on")
        if (currentIndex === index) {
            span.className = "on";
        }
    })
}

function showResults(count) {
    let theResult;
    if (currentIndex === count) {
        quizApp.style.cssText = "transform: translateY(-1000px);"
        setTimeout(() => {
            // quizApp.remove()
        }, 500);
        setTimeout(() => {
            let finalDiv = document.createElement("div")
            let title = document.createElement("h3")
            let result = document.createElement("div")
            let span = document.createElement("span")
            let par = document.createElement("div")
            let prog = document.createElement("span")

            title.innerHTML = "The Quiz Has Ended See Your Result"
            title.className = "final-title"

            if (rightAnswer < (count / 4)) {
                span.className = "bad"
            } else if (rightAnswer > (count / 4) && rightAnswer < count) {
                span.className = "good"
            } else if (rightAnswer = count) {
                span.className = "perfect"
            }

            result.className = "results"
            result.innerHTML = `Your Result Is: `
            span.innerHTML = `${rightAnswer}/${count}`
            result.appendChild(span)

            par.className = "final-par"
            par.appendChild(prog)

            prog.style.cssText = `width: ${(rightAnswer / count) * 100}%; height: 100%; background-color: #009688; display: block;`

            finalDiv.className = "final-score";
            finalDiv.appendChild(title);
            finalDiv.appendChild(result);
            finalDiv.appendChild(par);
            document.body.appendChild(finalDiv);
        }, 600);
    };
};

function countdown(duration, count) {
    if (currentIndex < count) {
        let minutes, seconds;
        countdownInterval = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            countDownElement.innerHTML = `${minutes}:${seconds}`;
            if (--duration < 0) {
                clearInterval(countdownInterval)
                submitButtom.click()
            }

        }, 1000);
    };
};
let allChoices = document.querySelector(".choices")
let htmlChoice = document.querySelector(".html")
let cssChoice = document.querySelector(".css")
let jsChoice = document.querySelector(".js")
htmlChoice.onclick = function () {
    allChoices.remove()
    quizApp.style.display = "block"
    getQuestions("./html-questions.json");
}
cssChoice.onclick = function () {
    allChoices.remove()
    quizApp.style.display = "block"
    getQuestions("./css-questions.json");
}
jsChoice.onclick = function () {
    allChoices.remove()
    quizApp.style.display = "block"
    getQuestions("./js-questions.json");
}
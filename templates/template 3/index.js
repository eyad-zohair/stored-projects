/* skills */
let skillsSection = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills .progress span");
/* stats */
let nums = document.querySelectorAll(".stats .number")
let statsSection = document.querySelector(".stats")
let started = false;
let numb = 0

window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop - 110) {
        if (!started) {
            nums.forEach(num => {
                startCount(num);
            });
            started = true;
        };
    };
    if (window.scrollY >= skillsSection.offsetTop - 200) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
            if (numb === 3) {
                document.querySelectorAll(".stats .number")[3].innerHTML = `${document.querySelectorAll(".stats .number")[3].innerHTML}K`
            }
            numb++
        };
    }, 2000 / goal);
};

/*event*/
let countDownDate = new Date("Dec 30, 2024 23:59:59").getTime()

let counter = setInterval(() => {
    // Get Date Now
    DateNow = new Date().getTime();

    let dateDiff = countDownDate - DateNow
    if (dateDiff <= 0) {
        clearInterval(counter)
    }

    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))

    document.querySelector(".days").innerHTML = days < 10 ? "0" + days : days
    document.querySelector(".hours").innerHTML = hours < 10 ? "0" + hours : hours
    document.querySelector(".minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes
    document.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds
}, 1000)

// Get Date Now
DateNow = new Date().getTime();

let dateDiff = countDownDate - DateNow

// Get Time Units
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))

document.querySelector(".days").innerHTML = days < 10 ? "0" + days : days
document.querySelector(".hours").innerHTML = hours < 10 ? "0" + hours : hours
document.querySelector(".minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes
document.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds
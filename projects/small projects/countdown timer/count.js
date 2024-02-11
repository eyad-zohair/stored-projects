// the end of the year 
let countDownDate = new Date("Dec 30, 2023 23:59:59").getTime()

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

    document.querySelector(".days").innerHTML = `${days < 10 ? "0" + days : days} Days`
    document.querySelector(".hours").innerHTML = `${hours < 10 ? "0" + hours : hours} Hours`
    document.querySelector(".minutes").innerHTML = `${minutes < 10 ? "0" + minutes : minutes} Minutes`
    document.querySelector(".seconds").innerHTML = `${seconds < 10 ? "0" + seconds : seconds} Seconds`
}, 1000)

// Get Date Now
DateNow = new Date().getTime();

let dateDiff = countDownDate - DateNow

// Get Time Units
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))

document.querySelector(".days").innerHTML = `${days < 10 ? "0" + days : days} Days`
document.querySelector(".hours").innerHTML = `${hours < 10 ? "0" + hours : hours} Hours`
document.querySelector(".minutes").innerHTML = `${minutes < 10 ? "0" + minutes : minutes} Minutes`
document.querySelector(".seconds").innerHTML = `${seconds < 10 ? "0" + seconds : seconds} Seconds`
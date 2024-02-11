let charachtersAll = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
let charachtersSmall = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
let char = []
let choices = document.querySelectorAll(".choice")
let serialNumber = []
let goal
let button = document.querySelector(".generate")
let serial = document.querySelector(".serial")

choices.forEach((choice) => {
    choice.onclick = function () {
        serialNumber = []
        choices.forEach((el) => {
            el.classList.remove("active")
        })
        this.classList.add("active")
        goal = this.dataset.choice
        if (goal == "charachtersAll") {
            for (let i = 0; i < 10; i++) {
                serialNumber.push(charachtersAll[Math.floor(Math.random() * charachtersAll.length)])
            }
        } else {
            for (let i = 0; i < 10; i++) {
                serialNumber.push(charachtersSmall[Math.floor(Math.random() * charachtersSmall.length)])
            }
        }
    }
    button.onclick = function () {
        serial.innerHTML = serialNumber.join("")
    }
})
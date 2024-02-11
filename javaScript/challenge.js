/* 114 dom challenge g.html line 103 - 107*/
// let mainInput = document.querySelector(".input")
// let create = document.querySelector(".add")
// let task = document.querySelector(".tasks")
// if (window.localStorage.getItem("object")) {
//     task.append(window.localStorage.getItem("object"))
// }
// create.onclick = function (e) {
//     e.preventDefault()
//     let value = mainInput.value
//     let ele = document.createElement("div")
//     let but = document.createElement("button")
//     but.innerHTML = "Delete"
//     but.style.cssText = "border:none; background-color: rgb(255 125 10); fot-weight: bold; border-radius: 6px; padding: 4px 6px; color:white;"
//     ele.innerHTML = value
//     ele.appendChild(but)
//     ele.style.cssText = "display:flex; justify-content:space-between; align-items:center; width: 100%; border-radius: 6px; padding:10px; background-color: white;"
//     task.appendChild(ele)
//     but.onclick = function () {
//         ele.remove()
//     }
//     window.localStorage.setItem("object", value)
// }
let inputAll = document.querySelectorAll("input")
let options = document.querySelectorAll("option")
let input1 = document.querySelector(".one")
let input2 = document.querySelector(".two")
let input3 = document.querySelector(".three")
let option1 = document.querySelector("on")
let option2 = document.querySelector("tw")
let option3 = document.querySelector("th")
let option4 = document.querySelector("four")
let option5 = document.querySelector("five")

if (window.sessionStorage.getItem("item1")) {
    input1.value = window.sessionStorage.getItem("item1")
}
input1.onblur = function () {
    window.sessionStorage.setItem("item1", input1.value)
}

if (window.sessionStorage.getItem("item2")) {
    input2.value = window.sessionStorage.getItem("item2")
}
input2.onblur = function () {
    window.sessionStorage.setItem("item2", input2.value)
}


if (window.sessionStorage.getItem("item3")) {
    input3.value = window.sessionStorage.getItem("item3")
}
input3.onblur = function () {
    window.sessionStorage.setItem("item3", input3.value)
}

options.onfocus = function () {
    console.log(options.value)
}
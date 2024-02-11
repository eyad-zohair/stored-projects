/* start global */
let up = document.getElementById("up")
window.onscroll = function () {
    /* start skills */
    let skilsSection = document.querySelector(".skills")
    let prog = document.querySelectorAll(".skills .progress span")

    window.onscroll = function () {
        if (window.scrollY >= skilsSection.offsetTop - 200) {
            prog.forEach((pro) => {
                pro.style.width = pro.dataset.goal
                up.style.display = "flex"
            })
        }
        /* end skills */
        if (window.scrollY >= 400) {

        }
        else {
            up.style.display = "none"
        }
    }
}
up.onclick = function () {
    scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}

let contentWidth = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop
    contentWidth.style.width = `${(scrollTop / height) * 100}%`
});
/* end global */
/* start home */
let home = document.getElementById("home")
home.onclick = function () {
    scrollTo({
        top: 100,
        left: 0,
        behavior: "smooth"
    })
}
let lander = document.getElementById("to-contact")
lander.onclick = function () {
    scrollTo({
        top: 2600,
        left: 0,
        behavior: "smooth"
    })
}
/* start heading */
let linker = document.querySelector(".heading .in")
let link = document.querySelectorAll(".heading ul")[0]
let artSec = document.getElementById("artSec")
linker.onclick = function () {
    linker.classList.toggle("clicked")
    link.classList.toggle("show")
}
/* end heading */
/* start skills */
let skills = document.getElementById("skills")
skills.onclick = function () {
    scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
    })
}
/* end slills */
/* start projects */
let projects = document.getElementById("projects")
projects.onclick = function () {
    scrollTo({
        top: 1400,
        left: 0,
        behavior: "smooth"
    })
}
let img1 = document.querySelector(".image1")
let img2 = document.querySelector(".image2")
let img3 = document.querySelector(".image3")
let img4 = document.querySelector(".image4")
img1.onclick = function () {
    window.open("../template 1/index.html", "_blank")
}
img2.onclick = function () {
    window.open("../template 2/index.html", "_blank")
}
img3.onclick = function () {
    window.open("../template 3/index.html", "_blank")
}
img4.onclick = function () {
    window.open("../template 4/index.html", "_blank")
}
let one = document.querySelector(".readone")
let two = document.querySelector(".readtwo")
let three = document.querySelector(".readthree")
let four = document.querySelector(".readfour")
one.onclick = function (event) {
    event.preventDefault()
    window.open("https://www.graphberry.com/item/leon-psd-agency-template#google_vignette", "_blank")
}
two.onclick = function (event) {
    event.preventDefault()
    window.open("https://www.graphberry.com/item/kasper-one-page-psd-template", "_blank")
}
three.onclick = function (event) {
    event.preventDefault()
    window.open("https://elzero.org/html-css-practice-template-three/", "_blank")
}
four.onclick = function (event) {
    event.preventDefault()
    window.open("https://elzero.org/html-css-practice-template-four/", "_blank")
}
/* end projects */
/* start contact */
let contact = document.getElementById("contact")
contact.onclick = function () {
    scrollTo({
        top: 100000,
        left: 0,
        behavior: "smooth"
    })
}
let userName = document.getElementById("name")
let number = document.getElementById("number")
let message = document.getElementById("message")
let namer = document.getElementById("namer")
let phone = document.getElementById("phone")
let mess = document.getElementById("mess")
let none = document.querySelector(".name p")
let nonee = document.querySelector(".phone p")
let nona = document.querySelector(".message p")
document.getElementById("submit").addEventListener("click", function (event) {
    if (/\w{3,}/ig.test(userName.value) === false) {
        event.preventDefault()
        userName.style.cssText = "border: 1px solid #f44336;"
        if (none.classList.contains("none")) {
            none.classList.remove("none")
            none.classList.add("confirm")
        }
        userName.onfocus = function () {
            none.classList.remove("confirm")
            none.classList.add("none")
            userName.style.cssText = "border: none;"
        }
    }
    else if (/\d{10}/ig.test(number.value) === false) {
        event.preventDefault()
        number.style.cssText = "border: 1px solid #f44336;"
        if (nonee.classList.contains("nonee")) {
            nonee.classList.remove("nonee")
            nonee.classList.add("confirm")
        }
        number.onfocus = function () {
            nonee.classList.remove("confirm")
            nonee.classList.add("none")
            number.style.cssText = "border: none;"
        }
    }
    else if (/\w{3,100}/ig.test(message.value) === false) {
        event.preventDefault()
        message.style.cssText = "border: 1px solid #f44336;"
        if (nona.classList.contains("nona")) {
            nona.classList.remove("nona")
            nona.classList.add("confirm")
        }
        message.onfocus = function () {
            nona.classList.remove("confirm")
            nona.classList.add("nona")
            message.style.cssText = "border: none;"
        }
    }
});
/* end contaact */
/* start footer */
let footer = document.querySelector(".footer p")
footer.innerHTML = `${new Date().getFullYear()} All Rights Reserved`
/* end footer */

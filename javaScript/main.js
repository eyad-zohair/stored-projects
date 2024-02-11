// function ageInTime(theAge) {
//     document.write(`<div>`)
//     document.write(`<p>${theAge * 12} Monthes</p>`)
//     document.write(`<p>${theAge * 48} weeks</p>`)
//     document.write(`<p>${theAge * 360} days</p>`)
//     document.write(`<p>${theAge * 8640} Hours</p>`)
//     document.write(`<p>${theAge * 518400} minutes</p>`)
//     document.write(`<p>${theAge * 31104000} Seconds</p>`)
//     document.write(`</div>`)
// }

// ageInTime(90)



// function by(start, end, toWrite) {
//     for (let i = start; i < end; i++)
//         document.write(`<p style = "margin: 0;">${toWrite.repeat(i)}</p>`)
// }
// by(1, 100, "1")


// let hi = document.querySelector(".calc input")
// hi.onblur = function () {
//     let res = hi.value
//     let egp = (hi.value * 15.6).toFixed(2)
//     document.querySelector("calc div").innerHTML = `{${res}} USD Dollar = {${egp}} Egyptian Pound`
// }



let num = document.querySelector('input[type="number"]')
let text = document.querySelector('input[type="text"]')
let choose = document.querySelector("option")
document.forms[0].onsubmit = function (e) {
    e.preventDefault()
    for (let i = 0; i < num.value; i++) {
        if (choose.innerHTML === "Div") {
            let ele = document.createElement("div")
            ele.innerHTML = text.value
            document.body.appendChild(ele)
        }
    }
}

/************************project************************************** */
// document.body.style.cssText = "margin: 0; background-color: rgb(236,236,236)"

// let header = document.createElement("header")
// let elzero = document.createElement("h2")
// let ul = document.createElement("ul")
// let home = document.createElement("li")
// let about = document.createElement("li")
// let service = document.createElement("li")
// let cotact = document.createElement("li")

// header.appendChild(elzero)
// header.appendChild(ul)
// ul.appendChild(home)
// ul.appendChild(about)
// ul.appendChild(service)
// ul.appendChild(cotact)

// elzero.innerHTML = "Elzero"
// home.innerHTML = "Home"
// about.innerHTML = "about"
// service.innerHTML = "service"
// cotact.innerHTML = "cotact"

// header.style.cssText = "background-color: white; display:flex; justify-content: space-between; align-items:center;"
// elzero.style.cssText = "color: rgb(35 169 110); font-weight: bold; margin: 0; padding: 15px;"
// ul.style.cssText = "display: flex; gap: 20px; list-style: none; margin-right: 20px; font-size: 18px;"

// header.className = "website-head"

// document.body.appendChild(header)

// let content = document.createElement("div")
// content.className = "content"
// content.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 15px; margin: 20px;"

// for (let i = 0; i < 15; i++) {
//     let product = document.createElement("div")
//     let heading = document.createElement("h2")
//     let parg = document.createElement("P")

//     let texth = document.createTextNode(`${i + 1}`)
//     let textp = document.createTextNode(`product`)

//     product.className = "product"

//     heading.appendChild(texth)
//     parg.appendChild(textp)
//     product.appendChild(heading)
//     product.appendChild(parg)

//     product.style.cssText = "background-color:white; display:flex; align-items: center; justify-content:center; flex-direction: column; padding:15px"
//     parg.style.cssText = "margin: 0; padding-top:2.9px"
//     heading.style.cssText = "margin: 0; font-size: 25px; padding: 0px; padding-bottom: 9px;"

//     content.appendChild(product)
//     document.body.appendChild(content)
// }

// let desc = document.createElement("div")
// let span = document.createElement("span")

// span.innerHTML = "Copy Right 2021"
// desc.appendChild(span)

// desc.style.cssText = "background-color: rgb(35 169 110); padding:20px; display:flex; align-items:center; justify-content: center;"
// span.style.cssText = "color: white; font-size: 18px"

// document.body.appendChild(desc)

let lis = document.querySelectorAll(".colors li")
let exp = document.querySelector(".exe")

if (window.localStorage.getItem("color")) { //color in local storage
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // remove active class
    lis.forEach((li) => {
        li.classList.remove("active")
    })
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}



lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color)
        // remove active class
        lis.forEach((li) => {
            li.classList.remove("active")
        })
        // add active class
        e.currentTarget.classList.add("active")
        // Add color to local storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        // change div bgcolor
        exp.style.backgroundColor = e.currentTarget.dataset.color
    })
});

export let a = 10;
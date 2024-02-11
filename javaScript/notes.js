
// window.alert("hello from eyad");


// console.log("%chello %cWorld", "color:red; font-size: 40px;", "color:blue; font-size: 30px;")


//number/////////////////////////////////////////////////////////
// /*
// console.log(100.4589458793.toFixed(2))
// console.log(parseInt("100"))
// console.log(parseFloat("100.500"))
// console.log(Number.isInteger("100"))
// console.log(Number.isInteger(100))
// console.log(Number.isInteger("100.5"))
// console.log(Number.isNaN(100))
// console.log(Number.isNaN("100"))
// console.log(Number.isNaN("eyad" / 2))
// */

// math////////////////////////////////////////////////////////////////
// console.log(Math.round(99.5))
// console.log(Math.round(99.2))
// console.log(Math.ceil(99.2))
// console.log(Math.floor(99.9))
// console.log(Math.min(10, 20, 100, -100, 90))
// console.log(Math.max(10, 20, 100, -100, 90))
// console.log(Math.pow(2, 4))
// console.log(Math.random())
// console.log(Math.trunc(99.5))


// let theName = "  ahmed";
// let theList = [1, 2, 3, 4, 5];
// console.log(theName);
// console.log(theName[4]);
// console.log(theName.charAt(5))
// console.log(theName.length)
// console.log(theName.trim())
// console.log(theName.toLocaleUpperCase())
// console.log(theName.toLocaleLowerCase())
// console.log(theName.trim().charAt(2).toUpperCase())


// let a = "elzero web school"
// console.log(a.indexOf("web"))
// console.log(a.indexOf("web", 8))
// console.log(a.lastIndexOf("web"))
// console.log(a.slice(0, 6))
// console.log(a.slice(-5, -3))
// console.log(a.repeat(4))
// console.log(a.split("", 2))

// let a = "elzero web school"
// console.log(a.substring(2, 6))
// console.log(a.substring(-10, 6)) // 0 - 6
// console.log(a.substring(a.length - 5, a.length - 3))
// console.log(a.substr(-5, 2))
// console.log(a.includes("web"))
// console.log(a.includes("web", 8))
// console.log(a.startsWith("elzero"))
// console.log(a.startsWith("z", 2))
// let m = console.log(a.endsWith("school", 17))



// let name = "ahmed";
// let gender = "male";
// let age = 30;

// gender === "male" ? console.log("Mr") : console.log("Mrs");
// age < 20
//     ? console.log(20)
//     : age > 20 && age < 60
//         ? console.log("20 to 60")
//         : age > 60
//             ? console.log("more than 60")
//             : console.log("unkowen")


// let price = 0;
// console.log(`the price is ${price || 200}`)
// console.log(`the price is ${price ?? 200}`)


// let day = 7;
// switch (day) {

//     case 0:
//     case 7:
//         console.log("saturday");
//         break;
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tuesday");
//         break;
//     default:
//         console.log("unkowen day");
//         break;
// }

// let holidays = 0;
// let money = 0;

// if (holidays == 0) {
//     money = 5000;
//     console.log(`My Money is ${money}`)
// }
// else if (holidays == 1 || holidays == 2) {
//     money = 3000;
//     console.log(`My Money is ${money}`)
// }
// else if (holidays == 3) {
//     money = 2000;
//     console.log(`My Money is ${money}`)
// }
// else if (holidays == 4) {
//     money = 1000;
//     console.log(`My Money is ${money}`)
// }
// else if (holidays == 5) {
//     money = 0;
//     console.log(`My Money is ${money}`)
// }
// else {
//     money = 0;
//     console.log(`My Money is ${money}`)
// }


// let friends = ["Ahmed", "mohamed", "Sayed", ["ali", "mahmoud"]]
// console.log(`Hello ${friends[0]}`)
// console.log(friends[3][0])
// console.log(friends[3][0][2])

// console.log(friends)
// friends[1] = ["mona", "marwa"]
// console.log(friends)
// friends[3] = "sameh"
// console.log(friends)

// console.log(Array.isArray(friends))

// console.log(friends.length)
// console.log(friends[1].length)

// friends[friends.length - 1] = "gamal";
// console.log(friends)



// let friends = ["Ahmed", "mohamed", "Sayed", "ali"]

// console.log(friends)

// friends.unshift("osama", "nabil")

// console.log(friends)

// friends.push("sama", "amal")

// console.log(friends)

// let first = friends.shift()
// console.log(first)
// console.log(friends)

// let last = friends.pop()

// console.log(last)

// console.log(friends)


// let friends = ["Ahmed", "mohamed", "Sayed", "ali", "Ahmed"]
// console.log(friends.indexOf("Ahmed"))
// console.log(friends.indexOf("Ahmed", 2))

// console.log(friends.lastIndexOf("Ahmed"))
// console.log(friends.lastIndexOf("Ahmed", -2))

// console.log(friends.includes("Ahmed"))
// console.log(friends.includes("Ahmed", 2))

// if (friends.indexOf("Osama") === -1) {
//     console.log("Not Found");
// }


// let friends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10]

// console.log(friends)
// console.log(friends.sort())
// console.log(friends.reverse())


// let friends = ["Ahmed", "mohamed", "Sayed", "ali", "Ahmed", "Ameer"];
// console.log(friends.slice(1, 3))
// console.log(friends.slice(-3))
// console.log(friends.slice(1, -2))
// console.log(friends.slice(-4, -2))
// console.log(friends)

// friends.splice(1, 2, "sameer", "samara")
// console.log(friends)


// let friends = ["Ahmed", "mohamed", "Sayed", "ali", "Ahmed", "Ameer"];
// let newfriends = ["Samar", "Sameh"];
// let school = ["Hanytham", "Shady"]

// let allfriends = friends.concat(newfriends, school, "from me")
// console.log(allfriends)

// console.log(allfriends.join())
// console.log(allfriends.join("|"))


// let friends = [1, 2, "Osama", "Ahmed", "Sayed", "Ali", "Amira"]

// let names = [];
// let numbers = [];

// for (i = 0; i < friends.length; i += 1){
//     if (typeof friends[i] === "string") {
//         names.push(friends[i])
//     }
//     else if (typeof friends[i] === "number") {
//         numbers.push(friends[i])
//     }
// }

// console.log(names)
// console.log(numbers)



// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["red", "green", "black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i+= 1) {
//     console.log("#".repeat(15));
//     console.log(products[i])
//     console.log("#".repeat(15));
//     console.log("colors: ")
//     for (let j = 0; j < colors.length; j +=1) {
//         console.log(`- ${colors[j]}`)
//     }
//     console.log("models: ")
//     for (let k = 0; k < models.length; k +=1) {
//         console.log(`- ${models[k]}`)
//     }
// }


// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["red", "green", "black"];

// mainloop: for (let i = 0; i < products.length; i+= 1) {
//     console.log(products[i])
//     nestedloop: for (let j = 0; j < colors.length; j+= 1) {
//         console.log(`- ${colors[j]}`)
//         if (colors[j] === "green")
//         break mainloop
//     }
// }



// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor", "one more"];
// let colors = ["red", "green", "black"];
// let count = 5;

// document.write(`<h1>Show ${count} Products</h1>`)

// for (let i = 0; i < count; i +=1) {
//     document.write(`<div>`)
//     document.write(`<h3>[${i + 1}] ${products[i]}<h3>`)
//     for (let j = 0; j < colors.length; j += 1) {
//         document.write(`<p> - ${colors[j]}</p>`)
//     }
//     document.write(`<p> - ${colors.join(" | ")}</p>`)
//     document.write(`</div>`)
// }



// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor", "one more"];
// let index = 0;

// while (index < products.length) {
//     console.log(products[index])
//     index += 1
// }

// let i = 0
// do {
//     console.log(i);
//     i++;
// } while (false);
// console.log(i)

// let admins = ["Ahmed", "Osama", "Sayed", "stop", "Samera"];
// let my = ["Amged", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"]

// for (i = 0; i < admins.length; i++) {
//     if (admins[i] === "stop") {
//         break;
//     }
//     document.write(`<div>`)
//     document.write(`The Admin For Team ${i + 1} is ${admins[i]}`)
//     document.write(`<h3>Team Members: </h3>`)
//     for (j = 0; j < my.length; j++) {
//         if (admins[i][0] === my[j][0]) {
//             for (h = 1; h < 4; h++) {
//                 console.log(h)
//             }
//             document.write(`<p>- ${i + 1} ${my[j]}</p>`)
//         }
//     }
//     document.write(`</div>`)
//     document.write(`<hr></hr>`)
// }


// function sayHello(user, age) {
//     if (age < 13) {
//         console.log("App Is Not Suitable For You")
//     }
//     else {
//         console.log(`Hello ${user} Your Age Is ${age}`);
//     }
// }
// sayHello("ahmed", 7);
// sayHello("mona", 29);

// function generateYears(start, end, exclude) {

//     for (let i = start; i <= end; i++) {
//         if (i === exclude) {
//             continue;
//         }
//         console.log(i)
//     }
// }
// generateYears(20, 40, 30)


// function calc(...numbers) {
//     let result = 0
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i]
//     }
//     return `result is ${result}`
// }
// console.log(calc(10, 20, 30))


// function Info(us = "Guest", age = "unkowen", rt = "0", show = "yes", ...sk) {
//     document.write(`<div>`)
//     document.write(`<h2>Welcome, ${us}</h2>`)
//     document.write(`<p>age: ${age}</p>`)
//     document.write(`<p>Rate: $${rt}</p>`)
//     if (show === "yes") {
//         if (sk.length > 0) {
//             document.write(`<p>Skills: ${sk.join(" | ")}</p>`)
//         }
//         else {
//             document.write(`<p>Skills: No Skills</p>`)
//         }
//     }
//     else {
//         if (sk.length > 0) {
//             document.write(`<p>Skills Is Hidden</p>`)
//         }
//         else {
//             document.write(`<p>Skills Is Hidden</p>`)
//             document.write(`<p>There is No Skills</p>`)
//         }
//     }
//     document.write(`</div>`)
// }

// Info("eyad", 20, 20, "yes", "Html", "Css", "JavaScript")



// function message(fName, LName) {
//     let mess = `hello`;

//     function concat() {
//         mess = `${mess} ${fName} ${LName}`;
//     }
//     concat()
//     return mess;
// }
// console.log(message("osama", "mohamed"))

// function message(fName, LName) {
//     let mess = `hello`;

//     function concat() {
//         return `${mess} ${fName} ${LName}`;
//     }
//     return concat();
// }
// console.log(message("osama", "mohamed"))


// function message(fName, LName) {
//     let mess = `hello`;

//     function concat() {

//         function getFullName() {

//             return `${fName} ${LName}`
//         }

//         return `${mess} ${getFullName()}`;
//     }

//     return concat();

// }
// console.log(message("osama", "mohamed"))




// function getDetails(zName, zAge, zCountry) {
//     function namePattern() {
//         return (`${zName.slice(0, 5)} ${zName.charAt(6).toUpperCase()}.`)
//     }
//     namePattern()
//     function ageWithMessage() {
//         return (`Your Age Is ${zAge.slice(0, 3)}`)
//     }
//     ageWithMessage()
//     function countryTwoLetters() {
//         return (`${zCountry.slice(0, 2).toUpperCase()}`)
//     }
//     countryTwoLetters()
//     function fullDetails() {
//         console.log(`Hello ${namePattern()}, ${ageWithMessage()}, You Live In ${countryTwoLetters()}`)
//     }
//     return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY

//*************************************************************************** */

// let num = [1, 2, 3, 4, 5, 6]

// let hi = []

// for (let i = 0; i < num.length; i++) {
//     hi.push(num[i] + num[i])
// }
// console.log(hi)

// // sam

// let add = num.map(function (element, index, array) {
//     return element + element;
// })
// let add2 = num.map((element) => element + element)
// console.log(add)
// console.log(add2)



// let swap = "elZERo";
// let invert = [1, -10, -20, 15, 100, -30]
// let ignore = "Elz123er4o"

// let sw = swap.split("").map(function (ele) {
//     return ele === ele.toLocaleUpperCase() ? ele.toLocaleLowerCase() : ele.toLocaleUpperCase()
// })
//     .join("");

// console.log(sw)


// let inv = invert.map(function (ele) {
//     return -ele;
// })
// console.log(inv)

// let ig = ignore.split("").map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
// })
//     .join("")
// console.log(ig)
//************************************************************************ */
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"]

// let f = friends.filter(function (ele) {
//     return ele.startsWith("A")
// })
// console.log(f)

// let num = [11, 20, 2, 5, 17, 10]

// let even = num.filter(function (el) {
//     return el % 2 === 0
// })

// console.log(even)


// let sentence = "I Love Foood Code Too Playing Much"

// let small = sentence.split(" ").filter(function (ele) {
//     return ele.length <= 4
// })
//     .join(" ")
// console.log(small)

// let ignore = "Elz123er4o"
// let ig = ignore.split("").filter(function (ele) {
//     return isNaN(parseInt(ele));
// })
//     .join("")
// console.log(ig)

// let mix = "A13BS2Zk";
// let fry = mix.split("").filter(function (ele) {
//     return !isNaN(parseInt(ele))
// }).map(function (ele) {
//     return ele * ele
// })
// console.log(fry)
//************************************************************************ */
// let num = [10, 20, 15, 30];

// let add = num.reduce(function (acc, current, index, arr) {
//     return acc + current
// }, 5)
// console.log(add)


// let biggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"]
// let check = biggest.reduce(function (acc, current) {
//     return acc.length > current.length ? acc : current;
// }, 5)
// console.log(check)

// let remove = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"]

// let final = remove.filter(function (ele) {
//     return !ele.includes("@")
// }).reduce(function (acc, curr) {
//     return `${acc}${curr}`
// })
// console.log(final)
//************************************************************************ */
// let user = {
//     // properties
//     theName: "Osama",
//     age: 38,
//     skills: ["HTML", "CSS", "JS"],
//     available: false,
//     addresses: {
//         ksa: "Riyadh",
//         egypt: {
//             one: "Cairo",
//             two: "Giza",
//         },
//     },
//     chechAv: function () {
//         if (user.available === true) {
//             return `Free For Work`
//         }
//         else {
//             return `Not Free`
//         }
//     }
// };
// console.log(user.theName);
// console.log(user.age);
// console.log(user.skills[2]) // index
// console.log(user.addresses.ksa)
// console.log(user.addresses.egypt.one)
// console.log(user.chechAv())


// let user = new Object({
//     age: 20,
// });
// console.log(user);

// user.age = 38;
// user["country"] = "Egypt"

// user.sayHello = function () {
//     return `Hello`
// }

// console.log(user)
// console.log(user.age)
// console.log(user.country)
// console.log(user.sayHello())


// console.log(this)

// myVar = 100;

// console.log(window.myVar)
// console.log(this.myVar)

// function sayHello() {
//     return this;
// }
// sayHello()



// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyobj = Object.create(obj);

// copyobj.age = 30;

// console.log(copyobj)
// console.log(copyobj.a)


// let hi = {
//     day: 40
// }
// let final = Object.assign({}, hi, { prop5: 5 })
// console.log(final)
//************************************************************************ */
// let id = document.getElementById("elzero");
// console.log(id.innerHTML)

// let tag = document.getElementsByTagName("p")
// console.log(tag[0].innerHTML)

// let clas = document.getElementsByClassName("try")
// console.log(clas)



// let element = document.querySelector(".try");
// let elemente = document.querySelector(".trye");

// console.log(element.innerHTML)
// console.log(elemente.textContent)

// element.innerHTML = "Text From <span>JavaScript<span>"
// elemente.textContent = "Text From <span>JavaScript<span>"

// document.images[0].src = "./images/team-01.png"
// document.images[0].alt = "hi"
// document.images[0].className = "img"

// let link = document.querySelector(".link")
// console.log(link.getAttribute("href"))
// console.log(link.getAttribute("class"))

// link.innerHTML = "twitter"
// link.setAttribute("href", "https://twitter.com")



// console.log(document.getElementsByTagName("p")[0].attributes);
// let p = document.getElementsByTagName("p")[0];

// if (p.hasAttribute("data-src")) {
//     if (p.getAttribute("data-src") === "") {
//         p.removeAttribute("data-src")
//     }
//     else {
//         p.setAttribute("data-src", "new value")
//     }
// }
// else {
//     console.log("not found")
// }
// if (p.hasAttributes()) {
//     console.log("has att")
// }
// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//     console.log("has att")
// }



// let ele = document.createElement("div");
// let attr = document.createAttribute("data-custom")
// let text = document.createTextNode("product one")
// let comment = document.createComment("This is Div")
// ele.className = "product"
// ele.setAttributeNode(attr)
// ele.setAttribute("data", "testing")

// // append Text to Element
// ele.appendChild(text)

// //append comment to child
// ele.appendChild(comment)

// // append to body
// document.body.appendChild(ele)


// for (let i = 0; i < 100; i++) {
//     let product = document.createElement("div")
//     let heading = document.createElement("h2")
//     let parg = document.createElement("P")

//     let texth = document.createTextNode(`Product ${i + 1}`)
//     let textp = document.createTextNode("Product Description")

//     product.className = "product"

//     heading.appendChild(texth)
//     parg.appendChild(textp)
//     product.appendChild(heading)
//     product.appendChild(parg)

//     document.body.appendChild(product)
// }

//
/*
--- oncontextmenu
--- onmouseenter
--- onmouseleave

--- onresize

--- onfocus
--- onblur
--- onsubmit
*/

// let btn = document.getElementById("btn")

// btn.onclick = function () {
//     console.log("clicked")
// }
// window.onscroll = function () {
//     console.log("scroll")
// }



// let userinput = document.querySelector("[name='username'")
// let ageinput = document.querySelector("[name='age'")
// document.forms[0].onsubmit = function (e) {
//     let userValid = false;
//     let ageValid = false

//     if (userinput.value !== "" & userinput.value.length <= 10) {
//         userValid = true;
//     }

//     if (ageinput.value !== "") {
//         ageValid = true;
//     }

//     if (userValid === false || ageValid === false) {
//         e.preventDefault()
//     }
// }
// document.links[0].onmouseenter = function (event) {
//     console.log(event)
//     event.preventDefault()
// }


// let one = document.querySelector(".one")
// let two = document.querySelector(".two")
// window.onload = function () {
//     two.focus()
// }
// one.onblur = function () {
//     document.links[0].click()
// }

/*
-classList // to know nuber of classes
--- classList.contains() // to search for a class
--- classList.item(index)
*/
// let ele = document.getElementById("div")
// ele.onclick = function () {
//     if (ele.classList.contains("add-one" || "add-two")) {
//         ele.classList.remove("add-one", "add-two")
//         ele.style.color = "black";
//         ele.style.backgroundColor = "white"
//     }
//     else {
//         ele.classList.add("add-one", "add-two")
//         ele.style.color = "red";
//         ele.style.backgroundColor = "blue"
//     }
// }
// ele.style.cssText = "font-weight:bold; opacity: 0.9;"
// ele.style.removeProperty("opacity")
// ele.style.setProperty("font-size", "40px", "important")

// let createdp = document.createElement("p")

// ele.before(createdp)
// ele.after("hello fro JS")

// ele.append(" hello world")
// ele.prepend("from here ")

//ele.remove()
/*
--- next element
--- previous element
--- next sibling
--- previous sibling
--- parent element
*/


// let b = document.querySelector(".bobab")
// let show = document.querySelector(".show")
// let remove = document.querySelector(".remove")


// b.appendChild(show)
// one = function () {
//     console.log("welcome")
// }
// two = function () {
//     console.log("two")
// }
// remove.addEventListener("click", one)
// remove.addEventListener("click", two)


// show.onclick = function () {
//     let newp = show.cloneNode(true)
//     newp.innerHTML = "clone"
//     newp.className = "clone"
//     document.body.appendChild(newp)
// }


// let cloned = document.querySelector(".clone")
// cloned.onclick = function () {
//     console.log("Iam Cloned")
// }


// document.addEventListener("click", function (e) {
//     if (e.target.className === 'clone') {
//         console.log("i am cloned")
//     }
// })
/******************************part Two************************************** */

// window.document.title = "Hello"
// let counter = setTimeout(function () {
//     console.log("hi")
// }, 3000)


// setInterval(function () {
//     console.log("hi")
// }, 1000);


let div = document.querySelector("div");

function countdowen() {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") {
        window.open("./iportant.html", "", "width=400,height=400,top=100")
    }
    if (div.innerHTML === "0") {
        clearInterval(counter)
    }
};

let counter = setInterval(countdowen, 1000)

let bt = document.querySelector("button")
bt.onclick = function () {
    clearInterval(counter)
}
// console.log(location.href)
// location.href = "https://google.com"


// console.log(location.host)
// console.log(location.hostname)

// console.log(location.protocol)

// console.log(location.hash)

let btn = document.querySelector(".button")
btn.onclick = function () {
    location.reload()
}

let open = document.querySelector(".open")
let close = document.querySelector(".close")
open.onclick = function () {
    window.open("./iportant.html", "", "width=400,height=400,top=100")

}


let scroll = document.querySelector(".scroll")
scroll.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 2000,
        behavior: "smooth"
    })
}
let button = document.querySelector(".up")

window.onscroll = function () {
    if (window.scrollY >= 600) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none"
    }
}
button.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}


let bobab = document.querySelector(".bobab")
let x = document.querySelector(".x")
let bobabe = function () {
    bobab.style.display = "flex"
}
let g = window.setTimeout(bobabe, 5000)
x.onclick = function () {
    bobab.style.display = "none"
}

let bob = document.querySelector(".bob")
bob.onclick = function () {
    bobab.style.display = "flex"
}

// let color = document.querySelector("input:checked"[0])
// color.onblur = function () {
//     console.log(color)
// }

// // set
// window.localStorage.setItem("color", "#f6f6f6")
// window.localStorage.fontWeight = "bold";
// window.localStorage["font-size"] = "20px";
// // get

// // remove one
// window.localStorage.removeItem("font-size")

// // clear all
// // window.localStorage.clear()

// // get key
// console.log(window.localStorage.key(0))

// let col = console.log(window.localStorage.getItem("color"))
// console.log(window.localStorage.fontWeight)
// console.log(window.localStorage["font-size"])

// // set page
// document.body.style.backgroundColor = window.localStorage.getItem("color")


// window.localStorage.setItem("color", "red")
// window.sessionStorage.setItem("color", "blue")


// let a = 1
// let b = 1
// let c = 1
// let d = 1
// let friends = ["Ahmed", "Sayed", "Ali", "Maysa"]
// [a, b, c, d] = friends
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let [xertr, y, , z] = friends;
// console.log(xertr)
// console.log(y)
// console.log(z)




// let friends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["mohamed", "Gamal"]]]
// let [, , , [a, , [, b]]] = friends
// console.log(a)
// console.log(b)




// // save book value
// let stash = book; // video

// // change book value
// book = video // book

// // change video value
// video = stash // video

// console.log(book)
// console.log(video)

// let [book = "video", video = "book"] = [video, book]

// console.log(book)
// console.log(video)


// const user = {
//     theName: "osama",
//     theAge: 39,
//     theTitle: "developer",
//     theCountry: "egypt",
//     skills: {
//         html: 70,
//         css: 80,
//     },
// };

// let { theName: n, theAge: a, theTitle, theCountry, skills: { html: h, css: c, } } = user
// console.log(n)
// console.log(a)
// console.log(theTitle)
// console.log(theCountry)
// console.log(`my html progress is ${h}`)
// console.log(`my css progress is ${c}`)

// const {html: skillOne, css: skillTwo} = user.skills;
// showDetails(user)
// function showDetails (obj) {
//     console.log(`Your Name Is ${obj.theName}`)
//     console.log(`Your age Is ${obj.theAge}`)
//     console.log(`Your Name Is ${obj.theName}`)
// }



// const user = {
//     theName: "osama",
//     theAge: 39,
//     skills: ["html", "Css", "Js"],
//     addresses: {
//         egypt: "cairo",
//         ksa: "riyadh"
//     }
// }

// const { theName: n, theAge: a, skills: [one, two, three], addresses: { egypt: e } } = user
// console.log(`Your Name is ${n}`)
// console.log(`Your age is ${a}`)
// console.log(`Your skills is ${one} ${three}`)
// console.log(`Your live in ${e}`)

/************************************************************************* */

// let data = [1, 1, 1, 2, 3]
// let unique = new Set(data).add(4)


// console.log(data)

// console.log(unique)
// unique.delete(2)
// console.log(unique)

// console.log(unique.size)

// console.log(unique.has(1))


// let myset = new Set([1, 1, 1, 2, 3, "A", "A"])

// console.log(myset)
// console.log(`size Of Element Is ${myset.size}`)
// // values
// let iterator = myset.keys();

// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next())

// // for each
// myset.forEach((el) => console.log(el))
// console.log("#".repeat(20))

// let myWs = new WeakSet([{ a: 1, b: 2 }])
// console.log(myWs)



// let mymap = new Map([
//     [10, "number"],
//     ["10", "string"]
// ])
// mymap.set(20, 30)

// console.log(mymap.has("10"))

// console.log(mymap)
// console.log(mymap.get(10))
// console.log((mymap.size))
// console.log(mymap.delete("10"))
// console.log(mymap.size)

// mymap.clear()
// console.log(mymap.size)



// let muser = { theName: "elzero" }
// let myMap = new Map()
// myMap.set(muser, "object value")
// muser = null
// console.log(myMap)
// console.log("#".repeat(20))
// let wmuser = { theName: "elzero" }
// let myWeakMap = new WeakMap()
// myWeakMap.set(wmuser, "object")

// wmuser = null

// console.log(myWeakMap)


// console.log(Array.from("Osama"))
// console.log(Array.from("12345", function (n) {
//     return +n + +n
// }))

// let myArray = [1, 1, 1, 2, 3, 4];
// let myset = new Set(myArray)


// console.log(myset)
// console.log(Array.from(myset))

// // console.log([...new Set(myArray)]) // from future

// function af() {
//     return Array.from(arguments);
// }
// console.log(af("osama", "Ahmed", "Sayed", 1, 2, 3))



// let myArray = [10, 20, 30, 40, 50, "a", "b"]
// // myArray.copyWithin(3)
// myArray.copyWithin(1, -2, -1)
// console.log(myArray)





// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let mynumber = 5;
// // let check = nums.some(function (e) {
// //     console.log("test")
// //     return e > 5
// // })

// let check = nums.some(function (e) {
//     console.log(this)
//     return e > this
// }, mynumber)
// console.log(check)

// function checkvall(arr, val) {
//     return arr.some(function (e) {
//         return e === val;
//     })
// }
// console.log(checkvall(nums, 20))
// console.log(checkvall(nums, mynumber))
// let range = {
//     min: 10,
//     max: 20,
// }
// let checkRange = nums.some(function (e) {
//     return e >= this.min && e <= this.max
// }, range)
// console.log(checkRange)



// const locations = {
//     20: "place 1",
//     30: "place 2",
//     50: "place 3",
//     40: "place 4",
// }
// let mainLocation = 15;
// let arr = Object.keys(locations)
// console.log(arr)
// let num = arr.map((n) => +n)
// console.log(num)
// let check = num.every(function (e) {
//     return e > this
// }, mainLocation)
// console.log(check)




// console.log("osama")
// console.log(..."osama")
// console.log([..."osama"])

// // concatinate
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let all = [...arr1, ...arr2]
// console.log(all)

// // copy array
// copy = [...arr1]
// console.log(copy)

// // push inside array

// let friends = ["osama", "ahmed", "sayed"]
// let newFriends = ["sameh", "mahmoud"]
// // friends = [...friends, ...newFriends]
// friends.push(...newFriends)
// console.log(friends)

// // use with math 

// let nums = [10, 20, -100, 1000, 500];
// console.log(Math.max(...nums))

// // spread object
// let obj1 = {
//     a: 1,
//     b: 2,
// }

// let obj2 = {
//     c: 3,
//     d: 4,
// }

// console.log({ ...obj1, ...obj2 })



// // introduction
// let str1 = "10 20 100 10000 5000"
// let invalidEmail = 'osama@@@gmail....com'
// let validEmail = 'o@nn.sa'

// let ip = '192.168.2.1'; // iPv4

// let url = 'elzero.org'
// url = 'elzero.org/'
// url = 'elzero.org/'
// url = 'https://elzero.org/'
// url = 'http://www.elzero.org/'
// url = 'https://www.elzero.org/?facebookid=fsd;klfs;dlf'



// let string = "Hello Elzero Web School I Love elzero"
// let regex = /elzero/ig;
// console.log(string.match(regex))



// let tld = "Com Net Org Info Code Io"
// let tldre = /(org|info|io)/ig
// console.log(tld.match(tldre))

// let nums = "12345678910"
// let numre = /[0-2]/g
// console.log(nums.match(numre))

// let notnums = "12345678910"
// let notnumre = /[^0-2]/g
// console.log(notnums.match(notnumre))


// let specialnums = "12@#$345678#$%$%910"
// let specialnumre = /[^0-9]/g
// console.log(specialnums.match(specialnumre))


// let practive = "oc1 os10s os2 os8 os8os"
// let practcere = /os[5-9]os/gi
// console.log(practive.match(practcere))



// let str = "AaBbcdefG123!234%^&*"
// let aTozSmall = /[a-z]/g;
// let notATozSmall = /[^a-z]/g;
// let aTozCapital = /[A-Z]/g;
// let notATozCapital = /[^A-Z]/g;
// let abc = /[ace]/g
// let notabc = /[^ace]/g
// let az = /[a-z]/gi
// let notaz = /[^a-z]/gi
// let specials = /[^a-z0-9]/gi

// console.log(str.match(aTozSmall))
// console.log(str.match(aTozCapital))
// console.log(str.match(aTozCapital))
// console.log(str.match(notATozCapital))
// console.log(str.match(abc))
// console.log(str.match(notabc))
// console.log(str.match(az))
// console.log(str.match(notaz))
// console.log(str.match(specials))



// /* 
// \w => [a-z, A-Z, 1-9, _]
// \W => [!\w]
// \d => 1-9
// \D => !1-9
// \s => [" ", tab, newline]
// \S => !\s
// */

// let email = '0@@@g...com o@g.com o@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g
// let word = /\w/g
// let wordcap = /\W/g
// let valid = /\w@\w.(com|net)/g

// console.log(email.match(dot))
// console.log(email.match(word))
// console.log(email.match(wordcap))
// console.log(email.match(valid))



// let names = "Sayed 1Spam 2Spam 3spam Spam4 Spam5 Osama Ahmed"
// let re = /\bspam|spam\b/ig;
// console.log(names.match(re))

// console.log(re.test(names))
// console.log(/\bspam|spam\b/ig.test("osama"))



// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"
// // let mailre = /\w+@\w+.(com|net)/ig
// let mailre = /\w+@\w+.\w/ig
// console.log(mails.match(mailre))

// let nums = "0110 10 150 05120 0560 350 00"
// let numsre = /0\d*0/ig
// console.log(nums.match(numsre))

// let urls = "https://google.com http://www.website.net web.com"
// let urlsre = /(https?:\/\/)?(www.)?\w+.\w+/ig
// console.log(urls.match(urlsre))



// let serials = " S100S S3000S S50000S S950000S"

// console.log(serials.match(/s\d{3}s/ig))
// console.log(serials.match(/s\d{4,5}s/ig))
// console.log(serials.match(/s\d{4,}s/ig))



// let myString = "We Love Prograing"
// let names = "10samaZ 2AhmedZ 3mohammed 3moustafaZ 5GamalZ"

// console.log(/ing$/ig.test(myString))
// console.log(/^we/ig.test(myString))
// console.log(/lz$/ig.test(names))
// console.log(/^\d/ig.test(names))

// console.log(names.match(/\d\w{5}(?=z)/ig))
// console.log(names.match(/\d\w{8}(?!z)/ig))



// let txt = "We Love Prograing And @ Because @ Is Amazing"
// console.log(txt.replace("@", "JavaScript"))
// console.log(txt.replaceAll("@", "JavaScript"))

// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"))



document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
    let result = phoneRe.test(phoneInput);
    if (result === false) {
        return false
    }
    return true
}
//*******************************oop **************************************/



// class User {
//     static count = 0;
//     constructor(id, user, sal) {
//         this.i = id;
//         this.u = user || "Guest";
//         this.s = sal < 6000 ? sal + 500 : sal;
//         this.msg = function () {
//             return `Hello ${this.u} Your Salary Is ${this.s}`
//         }
//         User.count++;
//     }
//     // methods
//     writesg() {
//         return `Hello ${this.u} Your Salary Is ${this.s}`
//     }
//     updateName(newName) {
//         this.u = newName
//     }
//     // static methods
//     static sayHello() {
//         return `Hello From Class`
//     }
//     static countMembers() {
//         return `${this.count} members Created`
//     }
// }

// let userOne = new User(100, "elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.count)
// console.log(userOne.i)
// console.log(userOne.u)
// userOne.updateName("guest")
// console.log(userOne.u)
// console.log(userTwo.msg())
// console.log(userOne.writesg())
// console.log(User.count)
// console.log(User.sayHello())
// console.log(User.countMembers())

// console.log(userOne instanceof User)
// console.log(userOne.constructor === User)

// let strOne = "Elzero";
// let strTwo = new String("Elzero")

// console.log(typeof strOne)
// console.log(typeof strTwo)


// // parent class
// class User {
//     constructor(id, username) {
//         this.i = id;
//         this.u = username
//     }
//     sayHello() {
//         return `Hello ${this.u}`
//     }
// }

// // derived class
// class Admin extends User {
//     constructor(id, username, Permissions) {
//         super(id, username)
//         this.p = Permissions
//     }
// }

// let userOne = new User(100, "Elzero")
// let adminOne = new Admin(110, "Mahmoud", 1)

// console.log(userOne.u)
// console.log(userOne.sayHello())
// console.log(adminOne.sayHello())



// class User {
//     #s;
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.#s = salary;
//     };
//     getSalary() {
//         return parseInt(this.#s)
//     }
// };

// class See extends User {
//     constructor(id, username, salary) {
//         super(id, username, salary)
//     }
// }
// let adminOne = new See(110, "Admin", "5000sfsdf")
// let userOne = new User(100, "Elzero", "5000efdf")

// console.log(userOne.u)
// console.log(userOne.getSalary() * 0.3)
// console.log(adminOne.i)
// console.log(adminOne.u)
// console.log(adminOne.getSalary())


// class User {
//     constructor(id, username) {
//         this.i = id;
//         this.u = username
//     }
//     sayHello() {
//         return `Hello ${this.u}`
//     }
// }

// let userOne = new User(100, "Elzero")

// console.log(userOne.u)

// console.log(User.prototype)
// console.log(userOne)
// User.prototype.sayWelcome = function () {
//     return `Welcome ${this.u}`
// }

// Object.prototype.love = "Elzero Web School"



// const myObject = {
//     a: 1,
//     b: 2,
// };
// Object.defineProperty(myObject, "c", {
//     writable: false,
//     enumerable: false,
//     configurable: false,
//     value: 3,
// });
// myObject.c = 100
// console.log(delete myObject.c)
// for (let prop in myObject) {
//     console.log(prop, myObject[prop])
// }

// console.log(myObject)



// const myObject = {
//     a: 1,
//     b: 2,
// };
// Object.defineProperties(myObject, {
//     c: {
//         configurable: true,
//         value: 3,
//     },
//     d: {
//         configurable: true,
//         value: 4,
//     },
//     e: {
//         configurable: true,
//         value: 5,
//     },
// })

// console.log(myObject)

// console.log(Object.getOwnPropertyDescriptor(myObject, "d"))
// console.log(Object.getOwnPropertyDescriptors(myObject))



// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };

// Object.defineProperties(myObj, {
//     username: {
//         configurable: false,
//         writable: false,
//         enumerable: true,
//     },
//     id: {
//         configurable: false,
//         writable: false,
//         enumerable: false,
//     },
//     score: {
//         configurable: false,
//         writable: false,
//         enumerable: true,
//     },
//     country: {
//         configurable: true,
//         writable: false,
//         enumerable: true,
//     },
// })
// myObj.score = 500;
// delete myObj.country
// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// { username: 'Elzero', score: 1000, id: 100 }



// let dateNow = new Date();
// console.log(dateNow);

// console.log(Date.now());

// let seconds = Date.now() / 1000;
// console.log(seconds)

// let minutes = seconds / 60;
// console.log(minutes)

// let hours = minutes / 60;
// console.log(hours)

// let days = hours / 24;
// console.log(days)

// let years = days / 365;
// console.log(years)



// let dateNow = new Date()
// let birthDay = new Date("aug 16, 2009")
// let dateDeff = dateNow - birthDay;
// console.log(dateDeff / 1000 / 60 / 60 / 24 / 365)

// console.log(dateNow.getTime())
// console.log(dateNow.getDate())
// console.log(dateNow.getFullYear())
// let monthes = ["janury", "februry", "march", "April", "May", "June", "July", "august", "septemper", "october", "november", "december"]
// console.log(monthes[dateNow.getMonth()])

// days = ["sunday", "monday", "tuesday", "wednsday", "thursday", "friday", "saturday"]
// console.log(days[dateNow.getDay()])

// console.log(dateNow.getHours())
// console.log(dateNow.getMinutes())
// console.log(dateNow.getSeconds())
// console.log(`${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`)



// let dateNow = new Date()
// console.log(dateNow)
// console.log("#".repeat(66))

// dateNow.setTime(0)
// console.log(dateNow)
// console.log("#".repeat(66))

// dateNow.setTime(3 * 1000 * 60 * 60 * 24 * 365)
// console.log(dateNow)
// console.log("#".repeat(66))

// dateNow.setDate(1)
// console.log(dateNow)
// console.log("#".repeat(66))

// dateNow.setFullYear(2022, 1, 20)
// console.log(dateNow)


// let date1 = new Date(0);
// console.log(date1)

// let date3 = new Date(1250370000000);
// console.log(date3)

// let date4 = new Date("8/16/2009");
// console.log(date4)

// let date5 = new Date("8-16-2009");
// console.log(date5)

// let date6 = new Date("8 16 2009");
// console.log(date6)

// let date7 = new Date(1977, 4, 4, 2, 1, 9);
// console.log(date7)

// let date8 = new Date(0);
// console.log(date8)

// let date9 = new Date(0);
// console.log(date9)



// let start = new Date();

// // operation
// for (let i = 0; i < 10000; i++) {
//     // document.write(`<div>${i}</div>`)
//     let div = document.createElement("div")
//     div.appendChild(document.createTextNode(i))
//     document.body.appendChild(div)
// }

// // time end
// let end = new Date()

// // operation duration
// let duration = end - start;

// console.log(duration)



// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let generator = generateNumbers()
// console.log(typeof generator)
// console.log(generator)
// console.log(generator.next())

// for (let value of generateNumbers()) {
//     console.log(value)
// }


// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// function* generateLetters() {
//     yield "a";
//     yield "b";
//     yield "c";
//     yield "d";
// }

// function* generateAll() {
//     yield* generateNumbers();
//     yield* generateLetters();
//     yield* [4, 5, 6]
// }

// let generator = generateAll()

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.return("closed"))
// console.log(generator.next())
// console.log(generator.next())



// function* generateNumbers() {
//     // yield 1;
//     // yield 2;
//     // // return ("stopped")
//     // yield 3;
//     // yield 4;
//     let index = 1
//     while (true) {
//         yield index++;
//     }
// }

// let generator = generateNumbers()
// let click = document.createElement("button")
// click.innerHTML = "generate"
// document.body.appendChild(click)
// click.onclick = function () {
//     let ele = document.createElement("p")
//     ele.innerHTML = generator.next().value
//     document.body.appendChild(ele)
// }



// let a = 10;
// let arr = [1, 2, 3, 4];
// function saySomething() {
//     return `something`
// }

// export {
//     a as number, arr, saySomething as s
// }
// export default function sayHello() {
//     return `Hello`
// }



// const jsonObject = '{"Username": "Osama", "Age": 39}'
// console.log(jsonObject)

// const jsObject = JSON.parse(jsonObject)

// console.log(jsObject)

// jsObject["Username"] = "Elzero"
// jsObject["Age"] = 20

// console.log(jsObject)

// const toServer = JSON.stringify(jsObject)
// console.log(toServer)



// setTimeout(() => {
//     console.log("web API")
// }, 0);

// function one() {
//     console.log("one")
// }

// function two() {
//     one()
//     console.log("two")
// }

// function three() {
//     two()
//     console.log("three")
// }

// three()



// console.log("one")
// setTimeout(() => {
//     console.log("three")
// }, 0);
// setTimeout(() => {
//     console.log("four")
// }, 0);
// console.log("two")

// setTimeout(() => {
//     console.log(myVar)
// }, 0)
// let myVar = 100;
// myVar += 100



// let request = new XMLHttpRequest()
// console.log(request)



// let myreq = new XMLHttpRequest()
// myreq.open("GET", "https://api.github.com/users/elzerowebschool/repos", true)
// myreq.send()
// myreq.onreadystatechange = function () {
//     // console.log(myreq.readyState)
//     // console.log(myreq.status)
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(this.responseText)
//         let jsData = JSON.parse(this.responseText)
//         // console.log(jsData)
//         for (let i = 0; i < jsData.length; i++) {
//             let div = document.createElement("div")
//             let name = document.createTextNode(jsData[i].full_name)
//             div.appendChild(name)
//             document.body.appendChild(div)
//         }
//     }
// }



// function makeRed(e) {
//     e.target.style.color = "red";
// }

// let p = document.querySelector(".test")
// p.addEventListener("click", makeRed)

// function callBack() {
//     console.log("call back")
// }

// setTimeout(callBack, 2000)

// setTimeout(() => {
//     console.log("download from url")
//     setTimeout(() => {
//         console.log("resize photo")
//         setTimeout(() => {
//             console.log("add logo")
//         }, 3000);
//         setTimeout(() => {
//             console.log("show in website")
//         }, 4000);
//     }, 2000);

// }, 1000);



// const promise = new Promise(function (res, rej) {
//     // let cotect = false;
//     // if (cotect) {
//     //     res("Conection Established")
//     // } else {
//     //     rej(Error("Connection Failed"))
//     // }



//     let employes = ["osama", "ahmed", "sayed", "mahoud"]
//     if (employes.length === 4) {
//         res(employes)
//     } else {
//         rej(Error("emplyes nuber is not 4"))
//     }
// })

// // console.log(promise)
// promise.then(
//     /*console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)*/
//     (resolveValue) => {
//         resolveValue.length = 2;
//         return resolveValue;
//     }
// ).then(
//     (resolveValue) => {
//         resolveValue.length = 1;
//         return resolveValue;
//     }
// ).then(
//     (resolveValue) => {
//         resolveValue.length = 1;
//         console.log(resolveValue)
//     }
// ).catch((rejReason) => console.log(rejReason)).finally(
//     console.log("the operation is done")
// )



// const getData = (apiLink) => {
//     return new Promise((resolve, reject) => {
//         let myreq = new XMLHttpRequest()
//         myreq.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText))
//             } else {
//                 reject(Error("No Data Found"))
//             }
//         };
//         myreq.open("GET", apiLink)
//         myreq.send()
//     })
// }

// getData("https://api.github.com/users/elzerowebschool/repos").then(
//     (result) => {
//         result.length = 10;
//         return result
//     }
// ).then((result) => console.log(result[0].name)).catch((rej) => console.log(rej))



// fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
//     console.log(result);
//     let myData = result.json();
//     console.log(myData);
//     return myData;
// }).then((myData) => {
//     myData.length = 10;
//     return myData
// }).then((myData) => {
//     console.log(myData[0].name)
// })



// const firstPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam The First Promise")
//     }, 5000);
// })

// const secondPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam The second Promise")
//     }, 1000);
// })

// const thirdPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Iam The third Promise")
//     }, 2000);
// })

// Promise.all([firstPromise, secondPromise, thirdPromise]).then(
//     (ress) => console.log(ress),
//     (rejs) => console.log(`1rejected: ${rejs}`)
// )

// Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then(
//     (ress) => console.log(ress),
//     (rejs) => console.log(`rejected: ${rejs}`)
// )

// Promise.race([firstPromise, secondPromise, thirdPromise]).then(
//     (ress) => console.log(ress),
//     (rejs) => console.log(`rejected: ${rejs}`)
// )




// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Iam The Good Promise")
//     }, 3000);
// })
// // .then(
// //     console.log("before promise")
// // ).then(
// //     (resolvedValue) => console.log(resolvedValue)
// // ).then(
// //     console.log("after promise")
// // ).catch(
// //     (rejectedValue) => console.log(rejectedValue)
// // )

// async function readData() {
//     console.log("before promise")

//     try {
//         console.log(await myPromise)
//     } catch (reason) {
//         console.log(`Reason: ${reason}`)
//     } finally {
//         console.log("after promise")
//     }
//     // console.log(await myPromise)
//     // console.log("after promise")
// }

// readData()
// Get Slider Items
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
let slideNumber = document.getElementById("slide-number");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let indicators = document.getElementById("indicators");
let sliderControlNext = document.querySelector(".slider-controls .next");

// Get Numbers Of slides
let imgNumber = sliderImages.length;

// Set Current Index
let currentSlide = 1;

prev.onclick = prevSlide;
next.onclick = nextSlide;

// create main ul
let paginationElement = document.createElement("ul");

// set id on ul
paginationElement.id = "pagination-ul";

for (let i = 0; i < imgNumber; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute('data-index', i + 1);
    paginationItem.appendChild(document.createTextNode(i + 1));
    paginationElement.appendChild(paginationItem);
};
indicators.appendChild(paginationElement);

// Get the new ul
let paginationCreatedUl = document.getElementById('pagination-ul');

// pagination items 
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"))

// loop throw all bullets 
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'))
        theChecker()
    }
}

// trigger the checker function
theChecker();

// Next Slide Function
function nextSlide() {
    if (next.classList.contains("disabled")) {
        return false
    } else {
        currentSlide++
        theChecker()
    }
};
function prevSlide() {
    if (prev.classList.contains("disabled")) {
        return false
    } else {
        currentSlide--
        theChecker()
    }
};

// create checker function
function theChecker() {
    // set slide number
    slideNumber.textContent = `Slide #${currentSlide}/${imgNumber}`;

    // remove all active classes
    removeAllActive()

    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");

    // set active class on current patgination item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")

    // check if current slide is first
    if (currentSlide == 1) {
        prev.classList.add("disabled")
    } else {
        prev.classList.remove("disabled")
    }
    // check if current slide is last
    if (currentSlide == imgNumber) {
        next.classList.add("disabled")
    } else {
        next.classList.remove("disabled")
    }
};

// Remove all active class from image and bullets 
function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove("active")
    })
    paginationBullets.forEach(bullet => {
        bullet.classList.remove("active")
    });
}
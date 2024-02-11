let allLi = document.querySelectorAll(".switcher li")
let gallery = document.querySelectorAll(".gallery div")
let galleryBox = document.querySelector(".gallery")

allLi.forEach(li => {
    li.onclick = function () {
        allLi.forEach(l => {
            l.classList.remove("active")
        })
        this.classList.add("active")
        gallery.forEach((img) => {
            img.style.display = "none"
        })
        let selected = document.querySelectorAll(this.dataset.cat)
        console.log(selected)
        selected.forEach((el) => {
            el.style.display = "flex"
        })
        if (selected.length < 5) {
            console.log("hi")
            galleryBox.style.gridTemplateColumns = `repeat(${selected.length}, 1fr)`
        } else {
            galleryBox.style.gridTemplateColumns = `repeat(5, 1fr)`
        }
    }
});
let colorOne = document.querySelector(".color-1")
let colorTwo = document.querySelector(".color-2")
colorOne.onblur = function () {
    document.body.style.cssText = `background-image: linear-gradient(to right,${colorOne.value}, ${colorTwo.value}`
}
colorTwo.onblur = function () {
    document.body.style.cssText = `background-image: linear-gradient(to right,${colorOne.value}, ${colorTwo.value}`
}
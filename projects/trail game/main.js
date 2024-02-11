let char = document.querySelector(".charachter")
let computedStyle = window.getComputedStyle(char);
let charPos = {
    x: 0,
    y: 0,
}
let playerVel = {
    x: 0,
    y: 0,
}
window.addEventListener("keydown", e => {
    if (e.key == "ArrowUp") {
        playerVel.y = -1
        setTimeout(() => {
            playerVel.y = 1;
        }, 1000);
        setTimeout(() => {
            playerVel.y = 0;
        }, 2000);
    }
    if (e.key == "ArrowLeft") {
        playerVel.x = -1
    }
    if (e.key == "ArrowRight") {
        playerVel.x = 1
    }
})
window.addEventListener("keyup", e => {
    playerVel.x = 0;
})
function update() {
    charPos.x += playerVel.x;
    charPos.y += playerVel.y;
    char.style.left = `${charPos.x}px`
    char.style.top = `${charPos.y}px`
    requestAnimationFrame(update)
}
update()
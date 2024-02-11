let nums = document.querySelectorAll(".nums .num")
let section = document.querySelector(".three")
let started = false;

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 3000 / goal);
}
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach(num => {
                startCount(num)
            });
            started = true
            return true
        }
    }
}
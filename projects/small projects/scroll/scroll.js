let contentWidth = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop
    contentWidth.style.width = `${(scrollTop / height) * 100}%`
});
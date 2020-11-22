const menuButton = document.querySelector(".menu")
const menu = document.querySelector(".navResponsive")
const navLinks = document.querySelectorAll(".navLinks")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
})

menu.addEventListener("click", e => {
    console.log(e.target.href);
    if (e.target.href) {
        // console.log("true")
        menu.classList.toggle("show");

    }
})

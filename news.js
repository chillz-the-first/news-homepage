const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})

let width = window.innerWidth;
console.log(width);

var newImg = document.getElementById("web3");
if (width <= 850) {
    newImg.src = "assets/images/image-web-3-mobile.jpg";
}
else {
    newImg.src = "assets/images/image-web-3-desktop.jpg";
}
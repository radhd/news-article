const menu = document.querySelector(".mobile-menu");
const menu_icon = document.querySelector(".menu-icon");
const navigation_menu = document.querySelector(".nav-links");
const opacity = document.querySelector(".bg-opacity");

let isOpen = false;

menu_icon.addEventListener("click", () => {
    if(!isOpen) {
        const newSrc = "./assets/images/icon-menu-close.svg";
        menu_icon.src = newSrc;

        menu_icon.style.position = "fixed";
        menu_icon.style.right = "5%";

        menu_icon.classList.add("rotate");
        menu.style.width = "68%";
        opacity.classList.add("activate");
        opacity.style.background = "rgba(0, 0, 26, 0.5)";
        opacity.style.width = "100%";
        opacity.style.height = "100%";
        document.body.style.overflow = "hidden";
        isOpen = true;

    } else {
        const newSrc = "./assets/images/icon-menu.svg";
        menu_icon.src = newSrc;
        menu_icon.style.position = "";
        menu_icon.classList.remove("rotate")
        menu.style.width = "0%";
        opacity.style.background = "";
        opacity.style.width = "0%";
        opacity.style.height = "0%";
        document.body.style.overflow = "";
        isOpen = false;
    }
});
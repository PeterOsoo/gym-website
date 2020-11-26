const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")
const navLogo = document.querySelector(".navbar__logo")
const body = document.querySelector("body")

// display mobile menu

const mobileMenu = () => {
	menu.classList.toggle("is-active")
	menuLinks.classList.toggle("is-active")
	body.classList.toggle("is-active")
}

menu.addEventListener("click", mobileMenu)

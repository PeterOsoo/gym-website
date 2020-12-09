const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")
const navLogo = document.querySelector("#navbar__logo")
const body = document.querySelector("body")

// display mobile menu

const mobileMenu = () => {
	menu.classList.toggle("is-active")
	menuLinks.classList.toggle("active")
	body.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu)

// Animations
gsap.registerPlugin(ScrollTrigger)

// hero section
gsap.from(".animate-hero", {
	duration: 1.6,
	opacity: 0,
	y: -150,
	stagger: 0.3,
})

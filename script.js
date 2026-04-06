const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close");
const mainNav = document.querySelector(".main-nav");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.add("none");
  closeMenu.classList.add("block");
  mainNav.classList.add("nav-open");
});

closeMenu.addEventListener("click", () => {
  hamburgerMenu.classList.remove("none");
  closeMenu.classList.remove("block");
  mainNav.classList.remove("nav-open");
});

// přidávame třídu active

const navLinks = document.querySelectorAll(".main-nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


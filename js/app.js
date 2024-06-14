const menuOpen = document.querySelector(".mobile-menu__open");
const menuClose = document.querySelector(".mobile-menu__close");

const navWrapper = document.querySelector(".nav-wrapper");
menuOpen.addEventListener("click", () => {
  navWrapper.classList.add("active");
});

menuClose.addEventListener("click", () => {
  navWrapper.classList.remove("active");
});

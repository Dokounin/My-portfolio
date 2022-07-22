const logo = document.querySelector("#logo");
const mobileMenu = document.querySelector("#mobile-menu");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
  logo.classList.toggle("logoVisible");
  mobileMenu.classList.toggle("visible");
  burger.classList.toggle("active");
});

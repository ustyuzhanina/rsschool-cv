const NAVBAR = document.querySelector(".navbar");
const NAVBAR_TOGGLER = document.querySelector(".navbar__toggler");

NAVBAR_TOGGLER.addEventListener("click", (e) => {
  NAVBAR.classList.toggle("navbar_opened");
});

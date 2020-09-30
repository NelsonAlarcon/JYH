const menu = document.getElementById("menu");
const barraNav = document.querySelector(".barra nav");
eventListeners();

function eventListeners() {
  menu.addEventListener("click", agregarActivo, false);
}
function agregarActivo(e) {
  barraNav.classList.toggle("activo");
  e.preventDefault;
}

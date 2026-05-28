const btnHamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
btnHamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", e => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// NAVBAR TOGGLE MENU 

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("menu-opened")
});

// NAVBAR SHRINK /////////////////////////////

window.addEventListener("scroll", function () {
    shrink();
});
  
let navbar = document.getElementById("navbar");
  
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
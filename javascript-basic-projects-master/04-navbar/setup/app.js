// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navBtn = document.querySelector(".nav-header .nav-toggle");
const links = document.querySelector(".links");

navBtn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

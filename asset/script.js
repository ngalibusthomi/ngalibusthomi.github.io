window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.pageYOffset > 15) {
      header.classList.remove("fromBlur");
      header.classList.add("fixed-top");
    } else {
      header.classList.remove("fixed-top");
      header.classList.add("fromBlur");
    }
};

const navTogle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav ul");
navTogle.addEventListener('click', function() {
  nav.classList.toggle("slide");
});

const navBar = document.querySelector(".nav-links-container");
const navToggle = document.querySelector(".nav-toggle");
console.log(navBar);
console.log(navToggle);

navToggle.addEventListener("click", ()=>{
    navBar.classList.toggle("show-links");
});
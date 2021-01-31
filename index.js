const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const container = document.getElementsByClassName("container")[0];
const overlay = document.getElementById("overlay");

openModalBtn.addEventListener("click", ()=>{
    overlay.style.display = "block";
    container.style.display = "block";
    container.classList.toggle("dim");
})

closeModalBtn.addEventListener("click", ()=>{
    overlay.style.display = "none";
    container.style.display = "none";
    container.classList.toggle("dim");
})
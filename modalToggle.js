
// Intializing Variables
const overlay = document.querySelector(".overlay");
const modalX = document.querySelector(".modal p");
const modal = document.querySelector(".modal");
const newGridButton = document.querySelector("button#new-grid");


// Toggling visibility of modal and overlay
document.addEventListener("click", (e) => {
    if (e.target === overlay || e.target === modalX) {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    } else if (e.target === newGridButton) {
        overlay.style.display = 'block';
        modal.style.display = 'flex';
    }
});
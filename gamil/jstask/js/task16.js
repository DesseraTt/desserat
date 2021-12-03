let task16 = document.querySelector(".task16");
let p16 = task16.querySelector("p");

check16_line.addEventListener("change", () => {
    p16.classList.toggle("textDecor");
});

check16_red.addEventListener("change", () => {
    p16.classList.toggle("red");
});

check16_bold.addEventListener("change", () => {
    p16.classList.toggle("bold");
});
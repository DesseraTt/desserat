let task15 = document.querySelector(".task15");
let allCheckbox = task15.querySelectorAll(`input[type="checkbox"]`);
for(let checkBox of allCheckbox) {
    checkBox.addEventListener("change", () => {
        let p = checkBox.parentElement.previousElementSibling;
        p.classList.toggle("noVisible");
    });
}
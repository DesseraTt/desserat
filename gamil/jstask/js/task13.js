
let radioTask13 = document.getElementsByClassName("task13__radio");
let resTask13 = document.getElementById("task13__res");
for(let radioButton of radioTask13) {
    radioButton.addEventListener('click', () => {
        resTask13.innerHTML = radioButton.value;
    });
}

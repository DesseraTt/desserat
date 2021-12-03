let inputsTask7 = document.getElementById('task7__text');
let inputsRes7 = document.getElementById('task7__res');
inputsTask7.addEventListener('blur', () => {
    inputsRes7.value = inputsTask7.value.split(" ").length;
});
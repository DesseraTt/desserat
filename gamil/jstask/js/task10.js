let inputsTask10 = document.getElementById('task10__text');
let inputsRes10 = document.getElementById('task10__res');
inputsTask10.addEventListener('blur', () => {
    inputsRes10.value = (new Date().getFullYear()) - +inputsTask10.value;
});
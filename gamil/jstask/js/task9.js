// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
let inputsTask9 = document.getElementById('task9__text');
let inputsRes9 = document.getElementById('task9__res');
inputsTask9.addEventListener('blur', () => {
    inputsRes9.value = inputsTask9.value.split(".").reverse().join("-");
});
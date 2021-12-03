// Дан инпут. В него вводится ФИО через пробел. 
// По потери фокуса запишите фамилию, имя 
// и отчество в отдельные инпуты.
let inputsTask5 = document.getElementById('task5__fullname');
inputsTask5.addEventListener('blur', () => {
    let arrayOfStr = inputsTask5.value.split(" ");
    let name = document.getElementById('task5__name');
    let surname = document.getElementById('task5__surname');
    let otch = document.getElementById('task5__otch');
    name.value = arrayOfStr[1];
    surname.value = arrayOfStr[0];
    otch.value = arrayOfStr[2];
});
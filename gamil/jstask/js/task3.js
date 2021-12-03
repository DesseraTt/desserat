// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
let inputsTask3 = document.getElementById('task3__input');
inputsTask3.addEventListener('blur', () => {
    let sum = 0;
    for(let letter of inputsTask3.value) {
        sum += +letter;
    }

    let inputResult = document.getElementById('task3__result');
    inputResult.value = sum;
});
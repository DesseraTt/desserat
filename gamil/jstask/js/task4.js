// Дан инпут. В него вводятся числа через запятую. 
// По потери фокуса найдите среднее арифметическое 
// этих чисел (сумма делить на количество).
let inputsTask4 = document.getElementById('task4__input');
inputsTask4.addEventListener('blur', () => {
    let arrayOfStr = inputsTask4.value.split(",");
    let sum = arrayOfStr.reduce((prev, item) => prev += +item, 0);
    sum = sum / arrayOfStr.length;
    let inputResult = document.getElementById('task4__result');
    inputResult.value = sum;
});
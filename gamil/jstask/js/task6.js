// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).
let inputsTask6 = document.getElementById('task6__fullname');
inputsTask6.addEventListener('blur', () => {
    let arrOfStr = inputsTask6.value.split(" ");
    let arr = [];
    for(let valueStr of arrOfStr) {
        arr.push(valueStr[0].toUpperCase() + valueStr.slice(1));
    }
    inputsTask6.value = arr.join(" ");
});
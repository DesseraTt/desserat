let buttonTask2 = document.getElementById('task2__button');
let inputsTask2 = document.getElementsByClassName('num');
buttonTask2.addEventListener('click', () => {
    let sum = 0;
    for(let itemInput of inputsTask2) {
        sum += +itemInput.value;
    }

    let inputResult = document.getElementById('task2__result');
    inputResult.value = sum;
});
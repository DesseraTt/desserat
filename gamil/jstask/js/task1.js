let buttonTask1 = document.getElementById('task1__button');
let inputsTask1 = document.getElementsByClassName('task1__input');
buttonTask1.addEventListener('click', () => {
    let sum = 0;
    for(let itemInput of inputsTask1) {
        sum += +itemInput.value;
    }

    let inputResult = document.getElementById('task1__result');
    inputResult.value = sum;
});
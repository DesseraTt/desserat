//  Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.
let inputsTask8 = document.getElementById('task8__text');
let inputsRes8 = document.getElementById('task8__res');
inputsTask8.addEventListener('blur', () => {
    let arrOfString = inputsTask8.value.split(" ");
    let maxLen = 0;
    for(let valueString of arrOfString) {
        if(valueString.length > maxLen) {
            maxLen = valueString.length;
        }
    }

    inputsRes8.value = maxLen;
});
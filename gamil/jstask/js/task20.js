let selects = document.querySelectorAll(".task20__select");
let select1 = selects[0];
let select2 = selects[1];

addEventListenerTask20(select1, select2);
addEventListenerTask20(select2, select1);

task20__button.addEventListener("click", () => {
    let inputValue = task20__input.value;
    let arrayExchange = [1, 71.81, 82.22];
    let firstValue = select1.value;
    let secondValue = select2.value;
    inputValue *= arrayExchange[firstValue]; //Переводим все в рубли
    let convertedVal = inputValue / arrayExchange[secondValue];
    task20__res.textContent  = convertedVal.toFixed(2);
});

function addEventListenerTask20(firstSelect, secondSelect) {
    let beforeFirstValue;
    firstSelect.addEventListener("click", () => {
        beforeFirstValue = firstSelect.value;
    });

    firstSelect.addEventListener("change", () => {
        let firstValue = firstSelect.value;
        let secondValue = secondSelect.value;
    
        if(firstValue == secondValue) 
            secondSelect.value = beforeFirstValue;
    });
}

let buttonTask12 = document.getElementById('task12__button');
let checkTask12 = document.getElementsByClassName("task12__check");
buttonTask12.addEventListener('click', () => {
   for(let item of checkTask12) {
        item.checked = ! item.checked;
   }
});
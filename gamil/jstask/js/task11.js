// Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.
let refTask11 = document.getElementById('task11__ref');
let checkTask11 = document.getElementById('task11__check');
refTask11.addEventListener('click', () => {
    checkTask11.checked = !checkTask11.checked;
});
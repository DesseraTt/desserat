let inputTask14 = document.getElementById("task14__text");
let checkTask14 = document.getElementById("task14__check");
checkTask14.addEventListener('click', () => {
    inputTask14.className = checkTask14.checked ? "noVisible" : "";
});

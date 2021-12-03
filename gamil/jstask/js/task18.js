let allLi = document.querySelectorAll(".task18__list > li");
for(let li of allLi) {
    let subUl = li.querySelector("ul");
    let span = li.querySelector("span");
    span.addEventListener("click", () => {
        subUl.classList.toggle("task18_active");
    });
}
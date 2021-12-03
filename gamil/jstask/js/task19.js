let task19 = document.querySelector(".task19");
let select = task19.querySelector("select");
select.addEventListener("change", ()=> {
    let citySelects = task19.querySelector(`.task19__city-seclect${select.value}`);
    let allCitySelects = task19.querySelectorAll(`.task19__city-seclect`);
    for(let vl of allCitySelects) {
        vl.classList.remove("task19__city-seclect_visible");
    }

    citySelects.classList.add("task19__city-seclect_visible");
});

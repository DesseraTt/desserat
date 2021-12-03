let task17 = document.querySelector(".task17");
let ul = document.createElement("ul");
task17.append(ul);

input17.addEventListener("blur", () => {
    ul.innerHTML = "";
    let arrOfCountries = input17.value.split(",");
    for(let country of arrOfCountries) {
        let li = document.createElement("li");
        li.append(country);
        ul.append(li);
    }
});
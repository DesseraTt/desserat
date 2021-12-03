let elem=document.getElementById('btn');
elem.addEventListener('click',func);
let el1=document.getElementsByClassName('cls');

function func(){
    let sum=0;
    for (let i = 0; i <el1.length; i++) {
        sum+= +el1[i].value;
    }
    let newEl = document.getElementById('pls');
    newEl.innerHTML = sum;
}

let elem2 = document.getElementById('cls')
elem2.addEventListener('blur',func);
//4

let elem3 = document.getElementById('num')
elem3.addEventListener('blur',function(){
    let sum = 0;
    let a = elem3.value.split(',');
    for (let i = 0; i <a.length; i++) {
                sum += +a[i];
            }
            let newEl = document.getElementById('res4');
            newEl.innerHTML = (sum / a.length);
});
//5
let elem5 = document.getElementById('name')
elem5.addEventListener('blur',function(){
    let [surname = "",name = "",second_name = ""] = elem5.value.split(' ');
    let newEl1 = document.getElementById('res5_1');
    newEl1.value = surname;
    let newEl2 = document.getElementById('res5_2');
    newEl2.value = name;
    let newEl3 = document.getElementById('res5_3');
    newEl3.value = second_name;

});

let elem6 = document.getElementById('name_lowercase')
elem6.addEventListener('blur',function(){
    let [surname = "",name = "",second_name = ""] = elem6.value.split(' ');
    elem6.value = surname[0].toUpperCase()+surname.slice(1)+" ";
    elem6.value += name[0].toUpperCase()+name.slice(1)+" ";
    elem6.value += second_name[0].toUpperCase()+second_name.slice(1)
});

let elem7 = document.getElementById('words')
elem7.addEventListener('blur',function(){
    let a = elem7.value.split(' ');
    let newEl=document.getElementById('res7');
    newEl.innerHTML = a.length;
});
let elem8 = document.getElementById('max_words')
elem8.addEventListener('blur',function(){
    let a = elem8.value.split(' ');
    let newEl = document.getElementById('res8');
    let maxLen = 0;
    for (let value of a){
        if (value.length>maxLen)
            maxLen = value.length;
    }
    newEl.innerHTML = maxLen;
});

let elem9 = document.getElementById('date')
elem9.addEventListener('blur',function(){
   let a=elem9.value.split(".").reverse().join("-");
    let newEl = document.getElementById('res9');
    newEl.innerHTML = a;
});
let elem10 = document.getElementById('birth')
elem10.addEventListener('blur',function(){
    let year= new Date().getFullYear()
    let newEl = document.getElementById('res10');
    newEl.innerHTML = year - elem10.value;
});



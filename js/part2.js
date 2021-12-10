
let elem11 = document.getElementById('link')
elem11.addEventListener('click',function(e) {
   let newEl = document.getElementById('check')
   newEl.checked = !newEl.checked;
   e.preventDefault();
});

let elem12 =document.getElementById('btn_checkbox')
elem12.addEventListener('click',function (e){

   let newel=document.getElementsByClassName('checkbox2')
   for (let i =0;i<newel.length;i++)
      newel[i].checked=!newel[i].checked;
   e.preventDefault();
})

let elem13=document.getElementsByName('rd')
let newEl = document.getElementById('languages');
for (let i =0;i<elem13.length;i++) {
   elem13[i].addEventListener('click',function (e) {
         newEl.value ="Вы !знаете "+ elem13[i].value;}
   )
}

let elem14=document.getElementById('box3')
elem14.addEventListener('click',function (){
   let newel=document.getElementById('t24');
   if (elem14.checked == true) {
      newel.className="visible";
   }
   else if (elem14.checked==false) {
      newel.className="non-visible";
   }
})

let elem15=document.getElementsByClassName('abc')
let newel = document.getElementsByClassName('t25');
for (let i =0;i<elem15.length;i++)
{
elem15[i].addEventListener('click',function () {
   if (elem15[i].checked == true) {
      newel[i].className = "visible t25";
   } else if (elem15[i].checked == false) {
      newel[i].className = "non-visible t25";
   }})
}

let elem16 =document.getElementById("tbbox26") 
let elem16_2=document.getElementsByClassName("checkbox26")
for (let i =0;i<elem16_2.length;i++)
{
   elem16_2[i].addEventListener('click',function () {
   elem16.classList.toggle(elem16_2[i].name);
})
}

let btn17=document.getElementById("btn_t27").addEventListener('click',function(){
   let ul= document.getElementById("ul_t27");
   while(ul.firstChild){
      ul.removeChild(ul.firstChild);
   }
   let elem17=document.getElementById("t27").value;
   let elemList = elem17.split(",");
   for(let i =0;i<elemList.length;i++){
      let li = document.createElement('li');
      li.innerHTML=elemList[i];
      ul.appendChild(li);
   }
})

let elem18=document.getElementsByClassName("t28_li");
for(let i =0;i<elem18.length;i++)
elem18[i].addEventListener('click',function(){
  let child = elem18[i].childNodes[1];
  child.classList.toggle("visible");
})



let elem19 = document.querySelector("#t29");
let Selectedline = elem19.options;
let qwe = document.querySelector(".qwe");
elem19.addEventListener('click',function(){
   for(let i =0;i<Selectedline.length;i++)
   {
      if (Selectedline[i].selected ==true){

         qwe.childNodes[2*i+1].classList.toggle("visible");
      }
   }
  
}
   )

   let convert = [1,73.48,82.79];
let elem20_1 = document.querySelector(".t20_1");
let elem20_2 = document.querySelector(".t20_2");
let selects20_1 = elem20_1.options;
let selects20_2 = elem20_2.options;

let val1;
let val2;
let btn20 = document.querySelector("#btn_20")
btn20.addEventListener('click',function(){
   let  tbox1 = document.querySelector("#tbox1");
let  tbox2 = document.querySelector("#tbox2");

for (let i = 0; i < selects20_1.length; i++) {
 if (selects20_1[i].selected ==true){
  val1 = elem20_1[i].value;
 }
 if (selects20_2[i].selected ==true){
   val2 = elem20_2[i].value;
}

}
let tmp =tbox1.value;
tbox2.value = (tmp)*convert[val1]/convert[val2];

})
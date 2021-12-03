let elem11 = document.getElementById('check')
elem11.addEventListener('click',function(e) {
   let newEl = document.getElementById('box')
   newEl.checked = !newEl.checked;
   e.preventDefault();
});

let elem12 =document.getElementById('btn2')
elem12.addEventListener('click',function (e){

   let newel=document.getElementsByClassName('box2')
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
for (let i =0;i<elem15.length;i++)
{
elem15.addEventListener('click',function () {
   let newel = document.getElementById('t25');
   if (elem14.checked == true) {
      newel.className = "visible";
   } else if (elem14.checked == false) {
      newel.className = "non-visible";
   }})
}




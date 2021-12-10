<html>
<head>
 <title>JS task</title>
 <meta charset="utf-8">
 <link rel="stylesheet" href="styles.css" <?php echo rand()?>>
 <meta name="viewport" content="width-device-width,initial-scale 0">
</head>
<body>
<!---->
    <div class="task">T1+T2+T3. Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".</br>
    Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
    <div class="t24">
        <input class="cls blur"  id="cls"  value="1" type="text" placeholder="num">
        <input class="cls"   id="cls" value="2" type="text" placeholder="число">
        <input class="cls"   id="cls" value="3" type="text" placeholder="число">
        <button class="btn" id="btn">
        press me
    </button>
    <p id="pls"></p>
    </div>
    
</div>
    
<!-- -->
  
<!---->
    <div class="task t24">T4.Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
    <input   id="num"  value="" type="text" placeholder="числа через запятую">
    <p id="res4"></p>
    </div>
<div class="task">T5.Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты.
<div class="t24">
<input   id="name"  value="" type="text" placeholder="Введите фио">
    <input class="cls"  id="res5_1"  value="" type="text" placeholder="Фамилия">
    <input class="cls"   id="res5_2" value="" type="text" placeholder="Имя">
    <input class="cls"   id="res5_3" value="" type="text" placeholder="Отчество">

</div>

</div>

<div class="task">T6.Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).</div>
    <input   id="name_lowercase"  value="" type="text" placeholder="Введите фио">
<div class="task">T7.Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.</div>
<textarea  id="words" ></textarea>
    <p id="res7"></p>
<div class="task">T8.Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.
</div>
<textarea  id="max_words" ></textarea>
    <p id="res8"></p>

<div class="task">T9.Дан инпут. В него вводится дата в формате 31.12.2016. По потере фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
</div>
<input   id="date"  value="" type="text" placeholder="Введите дату">
<p id="res9"></p>
<div class="task">T10.Дан инпут. В него вводится год рождения пользователя. По потере фокуса выведите в абзац ниже сколько пользователю лет.
</div>
<input   id="birth"  value="" type="text" placeholder="Введите год рождения">
<p id="res10"></p>
<div class="task">T11.Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.
</div>
<a id ="link" href="">click</a>
<input type="checkbox" id="check">
<div class="task">T12.Даны чекбоксы. Дана кнопка. По нажатию на кнопку сделайте все чекбоксы отмеченными.

<div class="t24">
<button class="btn" id="btn_checkbox">
        press me
    </button>
<input class="checkbox2" type="checkbox">
<input class="checkbox2" type="checkbox">
<input class="checkbox2" type="checkbox">
<input class="checkbox2" type="checkbox">
</div>
</div>


    <div class="task">T13.Спросите у пользователя какой язык (html, css, js, php) он знает с помощью радио кнопочек. Выведите этот язык в абзац.
    
    <legend>Что вы уже знаете?</legend>
    <input type="radio" id="radioHTML" name="rd" value="HTML">
    <label for="radioHTML1">HTML</label>
    <input type="radio" id="radioCSS"  name="rd" value="CSS">
    <label for="radioCSS">CSS</label >
    <input type="radio" id="radioJS"  name="rd" value="JS">
    <label for="radioJS">JS</label>
    <input type="radio" id="radioPHP"  name="rd" value="PHP">
    <label for="radioPHP">PHP</label>
 
    </div>
<div>
<input   id="languages"  value="" type="text" placeholder="Выберите чекбокс">
</div>

<div class="task">T14.Дан чекбокс. Дан инпут. Сделайте так, что если чекбокс отмечен - инпут видимый, если не отмечен - не видимый.
<div class="t24">
<input id="box3" type="checkbox">
<input class="non-visible" id="t24" type="">
</div>
</div>



<div class="task">T15.Даны чекбоксы. Под каждым чекбоксом размещен абзац. Сделайте так, что если чекбокс отмечен - соответствующий абзац видимый, а если не отмечен - не видимый.
<div class="t24">
<input class="abc" id="" type="checkbox">
<p class="non-visible t25"  id="">1</p>
<input class="abc" id="" type="checkbox">
<p class="non-visible t25"  id="">2</p>
<input class="abc" id="" type="checkbox">
<p class="non-visible t25" id="">3</p>
</div>
</div>


<div class="task t24">T16.Дан абзац. Даны чекбоксы 'перечеркнуть', 'сделать жирным', 'сделать красным'. Если соответствующий чекбокс отмечен - заданное действие происходит с абзацем (становится красным, например). Если чекбоксу снять отметку - действие отменяется.
    <input class="checkbox26" type="checkbox" id="red" name="red" value="">
    <label for="radioHTML1">Красный</label>
    <input  class="checkbox26"type="checkbox" id="bold"  name="bold" value="">
    <label for="radioCSS">Жирный</label >
    <input  class="checkbox26"type="checkbox" id="lined"  name="lined" value="">
    <label for="radioJS">Перечеркнутый</label>

    <p id="tbbox26">ABC ABC ABC</p>   
</div>


<div class="task t24">T17.В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).
<input class="abc" id="t27" type="">
<button class="btn" id="btn_t27">
        press me
    </button>
<ul id="ul_t27">
    <li>Страны:</li>
</ul>
</div >


<div class="task">T18.Реализуйте раскрывающийся список. По умолчанию есть список стран (ul), по нажатию на страну внутри li со страной появляется список городов.
<ul class="t28">
    <li class="t28_li">Атака Титанов
        <ul class="t28__ non-visible">
            <li>(･ᴗ･)</li>
            <li>๑˘︶˘๑)</li>
            <li>(╯✧▽✧)╯</li>
        </ul>
    </li>
    <li class="t28_li">Токийский гуль
    <ul class="t28__ non-visible">
            <li>Z x c</li>
            <li>z X c</li>
            <li>z x C</li>
        </ul>
    </li>
    <li class="t28_li">Наруто
    <ul class="t28__ non-visible">
            <li>(◕‿◕)</li>
            <li>٩(｡•́‿•̀｡)۶</li>
            <li>o(≧▽≦)o</li>
        </ul>
    </li>
</ul>
</div>


<div class="task t24">T19.Даны два селекта. В первом находятся страны, во втором - города. Сделайте так, чтобы когда выбирается определенная страна - в другом селекте появлялись города этой страны. В абзац ниже пишите выбранную страну и город через запятую.
<select name="" id="t29">
    <option value="1">Атака Титанов</option>
    <option value="2">Токийский гуль</option>
    <option value="3">Наруто</option>
</select>
<div class="qwe" >
<select class="non-visible">
    <option value="1">(･ᴗ･)</option>
    <option value="2">๑˘︶˘๑)</option>
    <option value="3">(╯✧▽✧)╯</option>
</select>
<select class="non-visible">
    <option value="4">Z x c</option>
    <option value="5">z X c</option>
    <option value="6">z x C</option>
</select>
<select class="non-visible">
    <option value="7">(◕‿◕)</option>
    <option value="8">٩(｡•́‿•̀｡)۶</option>
    <option value="9">o(≧▽≦)o</option>
</select>
</div>

</div>


<div class="task t24">T20.Реализуйте калькулятор валют. Есть два селекта - селект с исходной валюты, селект с той валютой, в которую мы хотим перевести деньги, инпут, в который вводится сумма для обмена. Курсы валют храните в массиве. Сделайте так, чтобы в селектах нельзя было выбрать две одинаковых валюты. 

<select class="t20_1">
    <option value="0">Рубль</option>
    <option value="1">Доллар</option>
    <option value="2">Евро</option>
</select>
<select class="t20_2">
    <option value="0">Рубль</option>
    <option value="1">Доллар</option>
    <option value="2">Евро</option>
</select>
<button id="btn_20">
click
</button>
<input type="text" value = "1" id="tbox1">
<input type="text" placeholder = "результат"  id="tbox2">
</div>



<!--    -->
    <script src="main.js"></script>
    <script src="part2.js"></script>
<!---->
</body>

</html>
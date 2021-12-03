
function tick() {
    let  birth = new Date(2000, 9, 19,0,0,0);
    let currentdate =new Date();
    let currentsSeconds= Math.floor((currentdate - birth)/ 1000);
    let element = (
        <div>
            <h2 title="Прошло секунд с моего первого др">{currentsSeconds.toLocaleString()}s</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('clock')
    );
}

setInterval(tick, 500);

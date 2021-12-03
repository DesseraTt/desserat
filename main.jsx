
import React from 'react';
function tick() {
    let  birth = new Date(2000, 9, 19,0,0,0);
    let currentdate =new Date();
    let currentsSeconds= Math.floor((currentdate - birth)/ 1000);
    let element = (
        <div>
            <h1>Hello, world!</h1>

            <h2>I was born {currentsSeconds.toLocaleString()}s ago(.</h2>
        </div>
    );

    render(
        element,
        document.getElementById('clock')
    );
}

setInterval(tick, 500);

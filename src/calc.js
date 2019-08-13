import {fuelCalc} from "./fuel";      // топливо
import { salary } from "./salary";    // зарплата
import { breturn } from "./s/beltol"; //платные дороги

// главный файл расчета
let buttonResult = document.querySelector('#result button');
let result = document.querySelector('span.result');

buttonResult.addEventListener('click', mainCalc);

function mainCalc() {
    fuelCalc();
    salary();
    P1();
    console.clear();
    console.log(`P1: `+ P1() );
    console.log(`Зарплата: ` + salary() );
    console.log(`Топливо: ` + fuelCalc() );
    console.log(`Платные дороги: `+ breturn() );

    result.innerHTML = (P1() + salary() + fuelCalc() + breturn() ).toFixed(2);

}


function P1() {

    let dist = document.querySelector('#dist').value;
    let eur = document.querySelector('#eur').value;
    let rate = document.querySelector('#rate').value;
    let rent = document.querySelector('#rent').value;

    let duration = document.querySelector('#dur').value;
    let extraDur = document.querySelector('#extraDur').value;

    let commonDur = Number(duration) + Number(extraDur);


    if(dist*rate*eur < rent ) {
        return Number(rent);
    } else
    {
        return Number(dist*rate*eur);
    }

}
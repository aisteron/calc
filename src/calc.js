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

    result.innerHTML = ( salary() + fuelCalc() + breturn() ).toFixed(2);

}
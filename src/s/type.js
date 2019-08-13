import { config } from "../config";
import { beltol } from "./beltol";

// слушаем изменения в первом селекторе
let type = document.querySelector('select.type');

type.addEventListener("change",(e)=>{
    drawSelectDetails(type.options[type.selectedIndex].classList[0]);
});


// первичная инициализация

drawSelectDetails('sedan');


function drawSelectDetails(className) {

    let selectDetails = document.querySelector('select.details');
    selectDetails.innerHTML = '';

    let details = config.vehicles[className];

    Object.values(details).forEach((e) => {
        selectDetails.innerHTML += `<option class="${e.className}">${e.name}</option>`;
    });

    draw(selectDetails.querySelector('option:nth-of-type(1)').classList);

}




/* первый селект с типом транспорта
// второй селект - с подробностями
// мы будем рисовать частями:
   1. слушаем событие у первого селекта. по change рисуем содержимое 2-го селекта
   2. и вызываем функцию отрисовки остального

   у options второго селекта создаем слушатель (они ведь тоже могут меняться )
   и вновь вызываем функцию draw отрисовки остального

   */

// слушатель у второго селекта details

document.addEventListener("change", function(e) {
    if(e.target.classList.value === 'details') {
        draw(e.target.options[e.target.selectedIndex].classList[0])
    }
})


function draw(className)
{
    let firstSelectValue = document.querySelector('select.type').options[document.querySelector('select.type').selectedIndex].classList[0];

    let typeMe = config.vehicles[firstSelectValue][className];

    document.querySelector('#seats').value = typeMe.seats;
    document.querySelector('#rate').value = typeMe.rate;
    document.querySelector('#cons').value = typeMe.cons;
    document.querySelector('#rent').value = typeMe.rent;
    document.querySelector('#hourRate').value = typeMe.hourRate;

    beltol();

}

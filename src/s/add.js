import { distance } from './api';
import { beltol } from './beltol';

/*добавление еще одного инпута в маршрут*/

const add = document.querySelector('span.add');
add.addEventListener('click', draw);



function draw()
{
    let parent = document.querySelector('.route .wrap .left');
    let el = document.createElement("div");
    el.classList.add("row");
    el.innerHTML = "<input type='text' placeholder='еще точка'><label class='remove'>—</label>";
    parent.insertBefore(el, parent.lastChild);

    // включаем google автокомплит для свежесозданного инпута
    let auto = new google.maps.places.Autocomplete(el.querySelector('input'));

    // слушаем момент выбора правильного адреса и вызываем функцию расчета из api.js
    google.maps.event.addListener(auto,'place_changed',function() {

        let lat = auto.getPlace().geometry.location.lat();
        let lng = auto.getPlace().geometry.location.lng();
        el.querySelector('input').setAttribute('data-location', `${lat}, ${lng}`);
        //console.log(el.querySelector('input').dataset.location);
        distance();
        beltol();

    });


}


// удаляем промежуточную точку из маршрута
document.addEventListener("click", remove);
function remove(event) {
    let el = event.target;
    let parent = el.parentNode;
    if(el.classList.value === 'remove')
    {
        parent.parentNode.removeChild(parent) ;
        distance();
    }


}

// включаем autocomplete для стартового инпута

var input = document.querySelector('.wrap .left input');
var autocomplete = new google.maps.places.Autocomplete(input);
input.addEventListener('blur', distance);


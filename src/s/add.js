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
}


// удаляем промежуточную точку из маршрута
document.addEventListener("click", remove);
function remove(event) {
    let el = event.target;
    let parent = el.parentNode;
    el.classList.value === 'remove' ? parent.parentNode.removeChild(parent) : '';
}
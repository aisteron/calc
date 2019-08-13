import {config} from "../config";

// уж больно белтол ненадежный, сделаю кнопку повтора
document.querySelector('.repeat').addEventListener("click", beltol);

function beltol() {
    let seats = document.querySelector('#seats').value;

    if(seats < 19 ) {
        document.querySelector('#beltol').value = 0;
        return;
    }

    const inputs = document.querySelectorAll('.wrap .left input');
    let coordinates = [];
    inputs.forEach((e)=>{
        coordinates.push(e.dataset.location)
    });

    rest(coordinates);

}

function rest(coordinates) {
    let belt = document.querySelector('#beltol');
        belt.setAttribute('disabled', 'disabled');
    fetch(`${config.path.url}`, {
        method: 'POST',
        body: JSON.stringify(coordinates)
    })
        .then(response => response.text())
        .then(data => {
            belt.value = data;
            belt.removeAttribute('disabled');
        });

}

// функция, которая будет просто возвращать значение инпута

function breturn() {
    return Number(document.querySelector('#beltol').value);
}


export { beltol, breturn };


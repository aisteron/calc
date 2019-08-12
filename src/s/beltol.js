// Раков 53.9667658, 27.0469132
// Минск 53.896765, 27.538642

// уж больно белтол ненадежный, сделаю кнопку повтора
document.querySelector('.repeat').addEventListener("click", beltol);

function beltol() {

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
    fetch('http://rest.local', {
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


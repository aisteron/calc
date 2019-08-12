fetch('http://rest.local/fuel.php')
    .then(response => response.json())
    .then(data => document.querySelector('#fuelRate').value = data  );

let cons = document.querySelector('#cons');
let dist = document.querySelector('#dist');
let fuelPrice = document.querySelector('#fuelPrice');
let fuelRate = document.querySelector('#fuelRate');

function fuelCalc()
{
    fuelPrice.value = (dist.value/100*cons.value*fuelRate.value).toFixed(2);
    return Number(fuelPrice.value);
}
export { fuelCalc };
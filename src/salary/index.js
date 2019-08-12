

function salary()
{
    let guideSalary = document.querySelector('#guide').value;
    let driverSalary = document.querySelector('#driver').value;
    return Number(guideSalary)+Number(driverSalary);
}

export { salary }

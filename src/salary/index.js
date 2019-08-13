

function salary()
{
    let guideSalary = document.querySelector('#guide');
    let driverSalary = document.querySelector('#driver').value;

    let duration = document.querySelector('#dur').value;
    let extraDur = document.querySelector('#extraDur').value;

    let commonDur = Number(duration) + Number(extraDur);

    if(commonDur < 3)
    {
        guideSalary.value = 60;

    }
    if((commonDur < 5) && (commonDur >= 3))
    {
        guideSalary.value = 80;
    }

    if((commonDur < 10) && (commonDur >= 5))
    {
        guideSalary.value = 120;
    }


    if(commonDur >= 10)
    {
        guideSalary.value = 160;
    }

    return Number(guideSalary.value)+Number(driverSalary);


}

export { salary }

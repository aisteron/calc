function distance() {

    const origin = document.querySelector('.wrap .left input[placeholder="Старт"]').value;
    const destination = [];
    const inputs = document.querySelectorAll('.wrap .left .row input');

    if(inputs.length === 0) {
        // если осталась последняя стартовая точка,
        // то мы не выполняем расчет вообще
        draw(0,0);
        return;
    }

    inputs.forEach((e)=>{
        destination.push(e.value)

    });

    //console.log(destination);

    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: destination,
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, callback);

    function callback(response, status) {

        if (status == 'OK') {
            let origins = response.originAddresses;

            for (let i = 0; i < origins.length; i++) {
                let results = response.rows[i].elements;
                for (let j = 0; j < results.length; j++) {

                    let distance = (results[j].distance.value/1000).toFixed(0);
                    let duration = (results[j].duration.value/3600).toFixed(2);

                    console.log(`dist: ${distance}; dur: ${duration}`);

                    summ(distance, duration)

                }
            }
        } else
        {
            console.log('Ошибка расчета расстояния в api.js');
            draw(0,0);
        }
    }



}



function summ(distance, duration) {
    let dist = 0;
    let dur = 0;

    dist += Number(distance);
    dur += Number(duration);

    draw(dist, dur);
    //console.log(`dist: ${dist}; dur: ${dur}`)
}

function draw(distance, duration) {
    document.querySelector('#dur').value = duration.toFixed(2);
    document.querySelector('#dist').value = distance.toFixed(0);
}


export { distance };
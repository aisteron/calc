function distance() {

    const origin = document.querySelector('.wrap .left input[placeholder="Старт"]').value;
    const waypoints = [];

    const inputs = document.querySelectorAll('.wrap .left .row input');
    if(inputs.length < 1 ) {draw(0,0); return;}

    // считаем инпуты и назначаем destination & waypoints
    let mods = Array.prototype.slice.call(inputs);
    let len = mods.length;

    let last = mods.splice((len - 1), 1);
    let rest = mods.splice(0, (len - 1));

    rest.forEach((e) => {
        waypoints.push({
            location: e.value,
            stopover: true
        })
    });

    let destination = last[0].value;
    //console.log(waypoints);




    let directionsService = new google.maps.DirectionsService;

    let dist = 0;
    let dur = 0;

    directionsService.route({
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {

            let route = response.routes[0];

            for (let i = 0; i < route.legs.length; i++) {

                dist += route.legs[i].distance.value/1000;
                dur += route.legs[i].duration.value/3600;

                draw(dist, dur)
            }
        } else {
            console.log('Directions request failed due to ' + status);
        }
    });




}


function draw(distance, duration) {
    document.querySelector('#dur').value = duration.toFixed(2);
    document.querySelector('#dist').value = distance.toFixed(0);
}


export { distance };
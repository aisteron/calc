// Раков 53.9667658, 27.0469132


// Минск 53.896765, 27.538642


function beltol() {
    //let req = 'http://calc.beltoll.by/proxy.ashx?http://localhost/arcgis/rest/services/BLR_RoutingService/MapServer/exts/RoutingSOE/solveRouteSimple?stops=';
    //let features = '{"features":[';

    const inputs = document.querySelectorAll('.wrap .left input');
    let coordinates = [];
    inputs.forEach((e)=>{
        //let coords = e.dataset.location.split(',');

        //console.log(coords[0]);
        //features +='{"geometry":{"x":coords[0],"y":coords[1],"spatialReference":{"wkid":4326}}},';
        //req += JSON.stringify(wrap);
        //req
        coordinates.push(e.dataset.location)
    });

    //features += '"spatialReference":{"wkid":"4326"}}]}' ;
    //req = req.concat(req, features);
    //console.log(req);

    //fetchIt(req);

    console.log(JSON.stringify(coordinates));

    rest(coordinates);

}

function fetchIt(req)
{
    fetch(req, {
        mode: 'no-cors',
        headers: {
            //'Content-Type': 'application/javascript',
            'Access-Control-Allow-Origin': "*",

            "accept":"*/*",
            "content-type":"application/x-www-form-urlencoded",
            "pragma":"no-cache",
            "x-requested-with":"XMLHttpRequest"
        }
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
        });
}

/*let user = {
    name: 'John',
    surname: 'Smith'
};*/
function rest(coordinates) {

    fetch('http://rest.local', {
        method: 'POST',
        body: JSON.stringify(coordinates)
    })
        .then(response => response.json())
        .then(data => console.log(data));

}


export { beltol };


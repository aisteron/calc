// Раков 53.9667658, 27.0469132


// Минск 53.896765, 27.538642

let req = 'http://calc.beltoll.by/proxy.ashx?http://localhost/arcgis/rest/services/BLR_RoutingService/MapServer/exts/RoutingSOE/solveRouteSimple?stops={"features":[';

function beltol() {

    let wrap = {};
    let features = [];
    const inputs = document.querySelectorAll('.wrap .left input');
    inputs.forEach((e)=>{
        let coords = e.dataset.location.split(',');
        //console.log(coords[0]);
        features.push({ geometry: {"x": coords[0], "y":coords[1], "spatialReference": {"wkid":4326} }})
        //req += JSON.stringify(wrap);
        //req
    });

    console.log(features);

}

export { beltol };
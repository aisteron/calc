<?php
$data = file_get_contents('php://input');
$json = json_decode($data, true);
//$json = json_decode('["27.5618753, 53.9022756","26.684533400000014, 54.03131900000018"]', true);



$req = 'http://calc.beltoll.by/proxy.ashx?http://localhost/arcgis/rest/services/BLR_RoutingService/MapServer/exts/RoutingSOE/solveRouteSimple?stops=';

$features = '{"features":[';

foreach ($json as $key => $value) {
	//echo $key.' --- '.$value;
	$arr = explode(',', $value);
	//$arr[0];
	if($key == 0) {
		$features .='{"geometry":{"x":'.$arr[1].',"y":'.$arr[0].',"spatialReference":{"wkid":4326}}},';
	}
	else {
		$features .='{"geometry":{"x":'.$arr[1].',"y":'.$arr[0].',"spatialReference":{"wkid":4326}},';
	}

	
}

$features .= '"spatialReference":{"wkid":"4326"}}]}';

$res = $req . urlencode($features).'&f=jsonp';



//echo $res;
$s = 'http://localhost/arcgis/rest/services/BLR_RoutingService/MapServer/exts/RoutingSOE/solveRouteSimple?stops: {"features":[{"geometry":{"x":27.5618753,"y":53.9022756,"spatialReference":{"wkid":4326}}},{"geometry":{"x":26.684533400000014,"y":54.03131900000018,"spatialReference":{"wkid":4326}}, "spatialReference":{"wkid":"4326"}}]}';

$r = 'http://calc.beltoll.by/proxy.ashx?http://localhost/arcgis/rest/services/BLR_RoutingService/MapServer/exts/RoutingSOE/solveRouteSimple?stops=%7B%22features%22%3A%5B%7B%22geometry%22%3A%7B%22x%22%3A27.5618753%2C%22y%22%3A53.9022756%2C%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%7D%7D%2C%7B%22geometry%22%3A%7B%22x%22%3A26.684533400000014%2C%22y%22%3A54.03131900000018%2C%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%7D%2C%20%22spatialReference%22%3A%7B%22wkid%22%3A%224326%22%7D%7D%5D%7D&f=jsonp';

//echo '<br><br><br><br><br><br>';

//echo $s;


$ch = curl_init();

// define options
$optArray = array(
    CURLOPT_URL => $res,
    CURLOPT_RETURNTRANSFER => true
);

// apply those options
curl_setopt_array($ch, $optArray);

// execute request and get response
$result = curl_exec($ch);

echo $result;
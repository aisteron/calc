<?php
$data = file_get_contents('php://input');
$json = json_decode($data, true);
//$json = json_decode('["27.5618753, 53.9022756","27.053317543539716, 53.96746252912403"]', true);



$req = 'http://calc.beltoll.by/proxy.ashx?http://localhost/arcgis/rest/services/BLR_RoutingService/MapServer/exts/RoutingSOE/solveRouteSimple?stops=';

$features = '{"features":[';

foreach ($json as $key => $value) {
	//echo $key.' --- '.$value;
	$arr = explode(',', $value);
	//$arr[0];
	end($json);
	if($key == 0) {
		$features .='{"geometry":{"x":'.$arr[1].',"y":'.$arr[0].',"spatialReference":{"wkid":4326}}},';
	}
	else if($key === key($json)) {
		$features .='{"geometry":{"x":'.$arr[1].',"y":'.$arr[0].',"spatialReference":{"wkid":4326}}, "spatialReference":{"wkid":"4326"}}';
	} else {
		$features .='{"geometry":{"x":'.$arr[1].',"y":'.$arr[0].',"spatialReference":{"wkid":4326}}, "spatialReference":{"wkid":"4326"}},';
	}

	
}

$features .= ']}';

// $res - результирующая строка с координатами точке из input-ов
$res = $req . urlencode($features).'&f=jsonp';



//echo $res;

/*------- отправка первичного GET запроса proxy.ashx */

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

curl_close($ch);




//$result - содержится первичный json ответа. 
//Обработка json 

$array = json_decode( $result, true );
$edges = $array['routeResult']['routeEdges'];
	//print_r($edges);
$wrap = [];
$list = [];
foreach ($edges as $key => $value) {
	foreach ($value as $k => $v) {
		//echo $v.'<br/>';
		$ar = explode('|', $v);

		if($ar[3] == 'True')
		{
			$replacements = array(3 => 1);
		} else if($ar[3] == 'False')
		{
			$replacements = array(3 => 0);
		}

		$replaced = array_replace($ar, $replacements);
			//print_r($replaced).'<br/>';
		array_push($list, $replaced);

	}

}


$wrap["list"] = $list;
$wrap["date"] = date('Y-m-d h:i:s');
$wrap["type"] = '98';
$wrap["axles"] = '2';
$wrap["emission"] = '2';



// ===== $wrap - обработанный массив из первичного json-a $result
// ===== далее делаем второй запрос POST



$url = "http://calc.beltoll.by/TollCalc.aspx/CalculateToll";


$cur = curl_init($url);
$jsonDataEncoded = json_encode($wrap);
curl_setopt($cur, CURLOPT_POST, 1);
curl_setopt($cur, CURLOPT_POSTFIELDS, $jsonDataEncoded);
curl_setopt ($cur, CURLOPT_RETURNTRANSFER, true);
curl_setopt($cur, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 


$resme = curl_exec($cur);

curl_close($cur);

$ar = json_decode( $resme, true );
$fee = 0;
foreach ($ar[d] as $key => $value) {
	foreach ($value as $k => $v) {
		if($k == 'fee')
		{
			$fee += $v;
		}
	}
}

echo $fee;


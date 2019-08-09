<?php


$res = 'http://calc.beltoll.by/proxy.ashx?http://localhost/arcgis/rest/services/BLR_RoutingService/MapServer/exts/RoutingSOE/solveRouteSimple?stops=%7B%22features%22%3A%5B%7B%22geometry%22%3A%7B%22x%22%3A27.5618753%2C%22y%22%3A53.9022756%2C%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%7D%7D%2C%7B%22geometry%22%3A%7B%22x%22%3A27.053317543539716%2C%22y%22%3A53.96746252912403%2C%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%7D%2C%20%22spatialReference%22%3A%7B%22wkid%22%3A%224326%22%7D%7D%5D%7D&f=jsonp';


	$ch = curl_init();

	$optArray = array(
		CURLOPT_URL => $res,
		CURLOPT_RETURNTRANSFER => true
	);

	curl_setopt_array($ch, $optArray);

	$result = curl_exec($ch);
	curl_close($ch);
	//echo '<pre>';
	//echo $result;
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




$url = "http://calc.beltoll.by/TollCalc.aspx/CalculateToll";

 
//Initiate cURL.
$ch = curl_init($url);
 
 
//Encode the array into JSON.
$jsonDataEncoded = json_encode($wrap);
 
//Tell cURL that we want to send a POST request.
curl_setopt($ch, CURLOPT_POST, 1);
 
//Attach our encoded JSON string to the POST fields.
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
 
//Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
 
//Execute the request
//$re = curl_exec($ch);

$re = '{"d":[{"__type":"TollCalc.Result","choID":122,"choRN":"P23","choName":"0122 Р23 10,200 km (Сенница) -- 1122 Р23 14,100 km (Н9041)","choLength":3900,"fee":0.80,"currencyCode":933,"snr":5943},{"__type":"TollCalc.Result","choID":123,"choRN":"P23","choName":"0123 Р23 14,100 km (Н9041) -- 1123 Р23 21,000 km (М1)","choLength":6900,"fee":1.42,"currencyCode":933,"snr":5623},{"__type":"TollCalc.Result","choID":1024,"choRN":"M1","choName":"1024 M1 346,044 km (P23_Минск_ЮГ) -- 0024 M1 322,264 km (P1_Дзержинск)","choLength":23780,"fee":4.91,"currencyCode":933,"snr":3387},{"__type":"TollCalc.Result","choID":1023,"choRN":"M1","choName":"1023 M1 322,264 km (P1_Дзержинск) -- 0023 M1 314,900 km (Подъезд_Дзержинск)","choLength":7360,"fee":1.52,"currencyCode":933,"snr":2729},{"__type":"TollCalc.Result","choID":1022,"choRN":"M1","choName":"1022 M1 314,900 km (Подъезд_Дзержинск) -- 0022 M1 307,834 km (P68)","choLength":7070,"fee":1.46,"currencyCode":933,"snr":2207},{"__type":"TollCalc.Result","choID":1021,"choRN":"M1","choName":"1021 M1 307,834 km (P68) -- 0021 M1 293,620 km (P2_Столбцы_ВОСТОК)","choLength":14210,"fee":2.93,"currencyCode":933,"snr":2723},{"__type":"TollCalc.Result","choID":1020,"choRN":"M1","choName":"1020 M1 293,620 km (P2_Столбцы_ВОСТОК) -- 0020 M1 281,871 km (P54_Столбцы_СЕВЕР)","choLength":11750,"fee":2.42,"currencyCode":933,"snr":2563},{"__type":"TollCalc.Result","choID":1019,"choRN":"M1","choName":"1019 M1 281,871 km (P54_Столбцы_СЕВЕР) -- 0019 M1 271,556 km (P64_Мир_ВОСТОК)","choLength":10320,"fee":2.13,"currencyCode":933,"snr":3443},{"__type":"TollCalc.Result","choID":1018,"choRN":"M1","choName":"1018 M1 271,556 km (P64_Мир_ВОСТОК) -- 0018 M1 262,242 km (P11_Мир)","choLength":9310,"fee":1.92,"currencyCode":933,"snr":2362},{"__type":"TollCalc.Result","choID":1017,"choRN":"M1","choName":"1017 M1 262,242 km (P11_Мир) -- 0017 M1 222,518 km (P5_Барановичи_СЕВЕР)","choLength":39720,"fee":8.20,"currencyCode":933,"snr":2342},{"__type":"TollCalc.Result","choID":1016,"choRN":"M1","choName":"1016 M1 222,518 km (P5_Барановичи_СЕВЕР) -- 0016 M1 214,535 km (P108_Барановичи_ЗАПАД)","choLength":7980,"fee":1.65,"currencyCode":933,"snr":2714},{"__type":"TollCalc.Result","choID":1015,"choRN":"M1","choName":"1015 M1 214,535 km (P108_Барановичи_ЗАПАД) -- 0015 M1 202,355 km (P99_Барановичи_ЮГ)","choLength":12180,"fee":2.51,"currencyCode":933,"snr":2194},{"__type":"TollCalc.Result","choID":1014,"choRN":"M1","choName":"1014 M1 202,355 km (P99_Барановичи_ЮГ) -- 0014 M1 176,620 km (P43_Сосновый_Бор)","choLength":25740,"fee":5.31,"currencyCode":933,"snr":3690},{"__type":"TollCalc.Result","choID":1013,"choRN":"M1","choName":"1013 M1 176,620 km (P43_Сосновый_Бор) -- 0013 M1 150,230 km (P6_Ивацевичи)","choLength":26390,"fee":5.45,"currencyCode":933,"snr":3187},{"__type":"TollCalc.Result","choID":1012,"choRN":"M1","choName":"1012 M1 150,230 km (P6_Ивацевичи) -- 0012 M1 128,070 km (P136)","choLength":22160,"fee":4.57,"currencyCode":933,"snr":2638},{"__type":"TollCalc.Result","choID":1011,"choRN":"M1","choName":"1011 M1 128,070 km (P136) -- 0011 M1 114,214 km (P84_Береза)","choLength":13860,"fee":2.86,"currencyCode":933,"snr":2542},{"__type":"TollCalc.Result","choID":1010,"choRN":"M1","choName":"1010 M1 114,214 km (P84_Береза) -- 0010 M1 081,215 km (N847)","choLength":33000,"fee":6.81,"currencyCode":933,"snr":3680},{"__type":"TollCalc.Result","choID":1009,"choRN":"M1","choName":"1009 M1 081,215 km (N847) -- 0009 M1 065,333 km (M10_Кобрин_ВОСТОК)","choLength":15880,"fee":3.28,"currencyCode":933,"snr":3172},{"__type":"TollCalc.Result","choID":1008,"choRN":"M1","choName":"1008 M1 065,333 km (M10_Кобрин_ВОСТОК) -- 0008 M1 056,325 km (M12_Кобрин_ЮГ)","choLength":9010,"fee":1.86,"currencyCode":933,"snr":2084},{"__type":"TollCalc.Result","choID":1007,"choRN":"M1","choName":"1007 M1 056,325 km (M12_Кобрин_ЮГ) -- 0007 M1 052,375 km (P2_Кобрин_ЗАПАД)","choLength":3950,"fee":0.82,"currencyCode":933,"snr":3745},{"__type":"TollCalc.Result","choID":1006,"choRN":"M1","choName":"1006 M1 052,375 km (P2_Кобрин_ЗАПАД) -- 0006 M1 036,103 km (P7_Жабинка)","choLength":16270,"fee":3.36,"currencyCode":933,"snr":3668},{"__type":"TollCalc.Result","choID":1005,"choRN":"M1","choName":"1005 M1 036,103 km (P7_Жабинка) -- 0005 M1 024,917 km (Брест_Аэропорт)","choLength":11190,"fee":2.31,"currencyCode":933,"snr":2553},{"__type":"TollCalc.Result","choID":1004,"choRN":"M1","choName":"1004 M1 024,917 km (Брест_Аэропорт) -- 0004 M1 021,430 km (Брест_ВОСТОК)","choLength":3490,"fee":0.72,"currencyCode":933,"snr":2611}]}';

$re = '{"d":[{"__type":"TollCalc.Result","choID":55,"choRN":"M6","choName":"0055 M6 012,000 km (Минск) -- 1055 M6 020,575 km (P65)","choLength":8580,"fee":1.77,"currencyCode":933,"snr":2532}]}';

$ar = json_decode( $re, true );

echo '<pre>';
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



/* эталонный list */
/*$j = '{"list":[["51216","100","21",1,"0.0837306745929067","471"],["100314","100","100",0,"0.17","170"],["93433","34","34",1,"0.0874852835241601","173"]],"date":"2019-08-09 08:12:17","type":"98","axles":"2","emission":"2"}';
$r = json_decode( $j, true );
echo '<pre>';
print_r($r);*/



<?php 
require ('phpquery.php');

$azs = file_get_contents('https://azs.belorusneft.by/sitebeloil/ru/center/azs/center/fuelandService/price/');

$document = phpQuery::newDocument($azs);

$dt = $document->find('div.b-left__informer table tr:eq(3) td:eq(0)')->text();

echo $dt;


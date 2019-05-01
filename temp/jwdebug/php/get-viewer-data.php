<?php

// $file = file_get_contents("https://drapr.com/viewer/json-api/single_item_viewer_api.php?" . $_SERVER['QUERY_STRING']);
$file = file_get_contents("../assets/JSON/viewer-data-colors.json");
echo $file;

?>
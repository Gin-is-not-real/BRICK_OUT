<?php
$file_path = 'scores.json';

$content = file_get_contents($file_path);

if(isset($_GET['action'])) {
    $action = $_GET['action'];

    if($action === 'save') {
        $json_str = $_GET['json'];
        file_put_contents($file_path, $json_str);
        echo 'save !!!';
    }
}
else {
    echo $content;
}
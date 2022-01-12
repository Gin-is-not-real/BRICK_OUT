<?php
$content = file_get_contents('scores.json');

$to_put = '{"name": "' . $_GET['name'] . '", "points": ' . $_GET['points'] . '}';

if(!empty($content)) {
    $new_content = str_replace(']', ', ' . $to_put . ']', $content);
}
else {
    $new_content = '[' . $to_put . ']';
}

file_put_contents('scores.json', $new_content, LOCK_EX);
<?php
$content = file_get_contents('scores.json');


if(isset($_GET['action'])) {
    $action = $_GET['action'];

    if($action === 'find' AND !empty($content)) {
        if(strpos('"' . $content, $_GET['name']) . '"') {
            //index du premier char du name
            $start_index = strpos($content, $_GET['name']);
            $json_str = substr($content, $start_index -10);
            $end_index = strpos($json_str, '},');

            $json_str = substr($json_str, 0, ($end_index - $start_index));

            echo $json_str;
        }
        else {
        }
    }
    else if($action === 'post') {
        $content = str_replace('[', '', $content);
        $content = str_replace(']', '', $content);
        $obj = json_decode($content);
        
        $to_put = '{"name": "' . $_GET['name'] . '", "points": ' . $_GET['points'] . '}';
        
        if(!empty($content)) {
            // $new_content = str_replace(']', ', ' . $to_put . ']', $content);
            $new_content = '[' . $content . ', ' . $to_put . ']';
            file_put_contents('scores.json', $new_content, LOCK_EX);
        }
        else {
            $new_content = '[' . $to_put . ']';
            file_put_contents('scores.json', $new_content, LOCK_EX);
        }
    }
}


<?php 
// get string content of score JSON file and decode it on an array
$content = file_get_contents('scores.json');
$decoded = json_decode($content);
$response = 'nothing';

if(isset($_GET['action'])) {
    $action = $_GET['action'];

    if($action == 'add') {

        if(isset($_GET['name']) AND isset($_GET['points'])) {

            $name = $_GET['name'];
            $points = $_GET['points'];

            $index = scoreExist($name, $decoded);
            if($index !== false) {

                if($points > $decoded[$index]->points) {
                    $decoded[$index]->points = $points;
                    file_put_contents('scores.json', json_encode($decoded));

                    $response = 'score updated';
                }
            }
            else {
                $new = new class{};
                $new->name = $name;
                $new->points = $points;

                array_push($decoded, $new);
                file_put_contents('scores.json', json_encode($decoded));

                $response = 'new score';
            }
        }
    }
}

echo json_encode(array(
    'response' => $response,
));

function scoreExist($name, $array) {
    for($i = 0; $i < count($array); $i++) {
        if($array[$i]->name == $name) {
            return $i;
        }
    }
    return false;
}
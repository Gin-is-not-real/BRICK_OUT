<?php
/**
 * Tableau de scores, manipulation de données json
 * Affiche une liste de score et un formulaire permettant d'inscrire un nom et un score
 * Si un score est déja inscrit pour le nom entré, on verifie si le score a besoin d'être mis a jour
 * Sinon on entre un nouveau joueur ainsi que son score dans le fichier json
 */
$file_path = '../data/scores.json';

$content = file_get_contents($file_path);
$decoded_content = json_decode($content);

$param1;
$param2;

$data = $decoded_content;
$message = 'enter your name and score';

/**
 */
if(isset($_GET['mode'])) {
    $mode = $_GET['mode'];

    if($mode === 'normal') {
        $param1 = $mode;
        $i = intval($_GET['index']) +1;
        $param2 = "lvl" . $i;

        $normal_scores = $decoded_content->$param1;

        if(!isset($normal_scores->$param2)) {
            $normal_scores->$param2 = new stdClass();
        }

        $lvl_scores = $normal_scores->$param2;
        $data = $lvl_scores;
    }

}
if(isset($_GET['action'])) {
    $action = $_GET['action'];

    if($action === 'get-lvl') {

    }
    elseif($action === 'submit') {
        $input_name = $_GET['name'];
        $input_score = $_GET['score'];

        $player = false;
        foreach($data as $name => $scores) {
            // si le joueur existe
            if($name === $input_name) {
                $player = $data->$name;
    
                if($input_score > $player->points) {
                    $player->points = $input_score;
                    $message = 'score updated';
                }
                else {
                    $message = 'no record to write';
                }
            }
        }

        // si le joueur n'existe pas
        if($player === false) {
            $new_player = new stdClass();
            $new_player->points = $input_score;
            $data->$input_name = $new_player;
        }

        file_put_contents($file_path, json_encode($decoded_content));
        $decoded_content = json_decode(file_get_contents($file_path));

        // echo $message;
    }
}
?>

<ul> 
<?php
foreach ($data as $name => $scores) {
    echo '<li id="' . $name. '">' . $name . ' : ' . $scores->points .'</li>';
}
?>
</ul>



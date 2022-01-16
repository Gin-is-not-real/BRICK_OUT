<?php
/**
 * Tableau de scores, manipulation de données json
 * Affiche une liste de score et un formulaire permettant d'inscrire un nom et un score
 * Si un score est déja inscrit pour le nom entré, on verifie si le score a besoin d'être mis a jour
 * Sinon on entre un nouveau joueur ainsi que son score dans le fichier json
 */
$file_path = 'scores.json';
$action_url = '../json_tests/js/fetch_php_script/scores.php';

$content = file_get_contents($file_path);
$decoded_content = json_decode($content);

$param1;
$param2;

$data = $decoded_content;
$message = 'enter your name and score';

/**
 * si le formulaire n'as pas été validé:
 *      on affiche la liste
 *      on affiche le formulaire
 * 
 * si le formulaire a ete posté:
 *      on teste
 *      on recupere le json 
 *      on affiche la liste
 */
if(isset($_GET['mode'])) {
    $mode = $_GET['mode'];

    if($mode === 'normal') {
        $param1 = $mode;
        $param2 = intval($_GET['index']);

        $normal_scores = $decoded_content->$param1;
        $lvl_scores = $normal_scores[$param2];
        $data = $lvl_scores;
    }

}
if(isset($_GET['action'])) {
    $action = $_GET['action'];

    if($action === 'get-lvl') {
        // $mode = $_GET['mode'];
        // $index = intval($_GET['index']);

        // $normal_scores = $decoded_content->$mode;
        // $lvl_scores = $normal_scores[$index];
        // $data = $lvl_scores;
    }
    elseif($action === 'submit') {
        $input_name = $_GET['name'];
        $input_score = $_GET['score'];

        // $mode = $_GET['mode'];
        // $index = intval($_GET['index']);

        // $normal_scores = $decoded_content->$mode;
        // $lvl_scores = $normal_scores[$index];
        // $data = $lvl_scores;

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



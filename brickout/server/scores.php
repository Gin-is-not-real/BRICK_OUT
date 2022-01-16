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
$to_display = $decoded_content;
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
if(isset($_GET['action'])) {
    $action = $_GET['action'];

    if($action === 'get-lvl') {
        $mode = $_GET['mode'];
        $index = intval($_GET['index']);

        $normal_scores = $decoded_content->$mode;
        $lvl_scores = $normal_scores[$index];
        $to_display = $lvl_scores;
    }
}
if(isset($_POST['name'])) {
    $action_url = 'scores.php';

    $input_name = $_POST['name'];
    $input_score = $_POST['score'];

    $player = false;
    foreach($decoded_content as $name => $scores) {
        // si le joueur existe
        if($name === $input_name) {
            $player = $decoded_content->$name;

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
        $decoded_content->$input_name = $new_player;
    }

    file_put_contents($file_path, json_encode($decoded_content));
    $decoded_content = json_decode(file_get_contents($file_path));
}
?>

<ul> 
<?php
foreach ($to_display as $name => $scores) {
    echo '<li>' . $name . ' : ' . $scores->points .'</li>';
}
?>
</ul>

<!-- <form method="post" action="<?= $action_url; ?>">
    <div>
        <label for="name">name: </label><input type="text" name="name" required></input>
        <label for="score">score: </label><input type="number" name="score" required></input>
        <input type="submit">
    </div>
</form>

<div><?= $message ?></div> -->
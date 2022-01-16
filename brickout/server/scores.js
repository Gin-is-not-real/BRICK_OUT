let phpScriptUrl = new URL(document.location.href + 'server/scores.php');
console.log(phpScriptUrl);

/**
 * Fetch du script scores.php et affichage de la liste + formulaire
 * L'url de l'action du formaulaire est mis à jour aprés avoir inséré dans le HTML (il n'est pas appelé du mm endroit)
 * Le script fonctionne normalement: 
 *      recuperation des données du fichier JSON
 *      recherche d'un joueur
 *      comparaison et mise à jour du score
 *      OU ecriture nouveau joueur dans le fichier JSON
 */

//recupere la liste et le formulaire et l'insere dans la div #test
function fetchAndDisplayScoresList(index) {
    let params = {
        action: 'get-lvl',
        mode: 'normal',
        index: index, 
    }
    for (let k in params) {
        phpScriptUrl.searchParams.append(k, params[k]);
    }

    fetch(phpScriptUrl)
    .then(response =>  response.text())
    .then(text => {
        // console.log(text)
        _ul.innerHTML = text;
        _formContainer.classList.remove('hidden');
    })
}

//envoi les infos necessaires a php pour enregistrer un nouveau score
function scoreSubmit() {
    let name = _inputName.value;
    let score = app.points;

    if((name.length > 0 && typeof name === 'string') && typeof score === 'number') {
        let params = {
            action: 'submit',
            mode: app.gameMode,
            index: app.lvlIndex,
            name: name,
            score: score
        }
        for (let k in params) {
            phpScriptUrl.searchParams.append(k, params[k]);
        }

        fetch(phpScriptUrl)
        .then(response =>  response.text())
        .then(text => {
            _ul.innerHTML = text;
        })
    }
}

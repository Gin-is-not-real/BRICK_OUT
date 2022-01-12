let FOLDER_URL = document.location.href + '/server/scores.json';

function fetchScores(url) {
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
}

fetchScores(FOLDER_URL);


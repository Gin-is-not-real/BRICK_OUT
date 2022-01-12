let FOLDER_URL = new URL(document.location.href + 'server');

function fetchScores() {
    fetch(FOLDER_URL + '/scores.json')
    .then(response => response.json())
    .then(response => console.log(response))
}
fetchScores();

function postScore(name, points) {
    let data = {
        name: name,
        points: points,
    };

    let url = new URL(FOLDER_URL + '/scores.php');
    for (let k in data) {
        url.searchParams.append(k, data[k]);
      }
    console.log(url)

    fetch(url)
    .then(response => response.text())
    .then(response => console.log(response))
}
postScore("gin", 200);
/**
 * test fetch put based on https://www.bezkoder.com/javascript-fetch/ tuto
 */
async function putScore(name, points) {
    let putData = {
        name: name, 
        points: points
    };

    try {
        let response = await fetch(FOLDER_URL + '/scores.json', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(putData)
        })

        if (!response.ok) {
            let message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
          }
    }
    catch(err) {
        console.log('Error: ' + err);
    }
}
// putScore("put", 0);





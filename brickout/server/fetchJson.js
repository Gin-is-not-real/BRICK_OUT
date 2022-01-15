let FOLDER_URL = new URL(document.location.href + 'server');

/**
 * Fetch the all content of score php file and call the funtion in parameter
 * @param {Function} callback 
 */
function fetchAllAndCallback(callback) {
    fetch(FOLDER_URL + '/scores.php')
    .then(response => response.json())
    .then(json => callback(json))
}

/**
 * Call the file scores.php and add or update the player score
 * @param {String} name 
 * @param {Integer} points 
 */
function addScore(name, points) {
    let params = {
        action: "add",
        name: name,
        points: points
    };

    let url = new URL(FOLDER_URL + '/scores.php');
    url = addParamsToUrl(url, params);

    fetch(url)
    .then(response => response.text())
    .then(response => console.log(response))
}
addScore('fefea', 150)

/**
 * Return an Url with query parameters
 * @param {URL} url 
 * @param {Object} params 
 */
function addParamsToUrl(url, params) {
    let paramsUrl = url;
    for (let k in params) {
        paramsUrl.searchParams.append(k, params[k]);
    }
    return paramsUrl;
}

//////////////////////////////////:
//TESTS 
function test() {
    fetch(FOLDER_URL + '/scores.php')
    .then(response => response.json())
    .then(json => console.log(json))
}
// test();

function testCallback(v) {
    console.log(v);
}
// fetchAllAndCallback(testCallback);

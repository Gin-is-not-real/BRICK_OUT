//////////////////////////////////////////////
//DEV
let _dev = document.querySelector('#switch-dev')
let _restart = document.querySelector('#restart');
let _changeLvl = document.querySelector('#change-lvl');
let _playerXp = document.querySelector('#player-xp');

let devIsActive = false;
//////////////////////////////////////////////
//APP
let _canvas = document.querySelector('canvas');
let ctx = _canvas.getContext('2d');
let frame;

let app = new App();
let paddle = new Paddle();
let ball = new Ball();
let lvl = new Lvl();


let nextPattern;
function generateNext() {
    nextPattern = patterns.sort(()=> Math.random() -0.5)[0];
    console.log(nextPattern);
}
generateNext();
App.initLvl(nextPattern);

////////////////////////////////////////////////
//
// let boxes = {
//     o: 2, r: 0
// };
// //generer une ligne de briques
// function generateLine() {
//     let line = new Array();
//     let jNbr = 10 - boxes.o - boxes.r; 

//     for(let i = 0; i < jNbr; i++) {
//         line[i] = 'j';
//     }
//     for(let j = 0; j < boxes.o; j++) {
//         line.push('o');
//     }
//     for(let k = 0; k < boxes.r; k++) {
//         line.push('r');
//     }
//     line.sort(()=> Math.random() -0.5);

//     // console.log(line);
// }

// generateLine();
// boxes.o ++;
// generateLine();
// boxes.o ++;
// generateLine();

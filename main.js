//////////////////////////////////////////////
//DEV
let _dev = document.querySelector('#switch-dev')
let _restart = document.querySelector('#restart');
let _changeLvl = document.querySelector('#change-lvl');
let _playerXp = document.querySelector('#player-xp');

let devIsActive = false;

//////////////////////////////////////////////
//HUB
let _lvl = document.querySelector('#lvl>p');
let _lifes = document.querySelector('#lifes>p');
let _points = document.querySelector('#points>p');

//////////////////////////////////////////////
//CANVAS
let _screen = document.querySelector('#screen');
let _play = document.querySelector('#play');
let _replay = document.querySelector('#replay');
let _win = document.querySelector('#win');

//////////////////////////////////////////////
//APP
let _canvas = document.querySelector('canvas');
let ctx = _canvas.getContext('2d');
let frame;

/*
    App contains methods for control animations and call functions draw() and move() of objects
    Lvl contains methods for manage bricks and drops
*/
let app = new App();
let paddle = new Paddle();
let ball = new Ball();
let lvl = new Lvl();

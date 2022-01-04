//////////////////////////////////////////////
//HUB
let _lvl = document.querySelector('#lvl>p');
let _points = document.querySelector('#points>p');
let _lifes = document.querySelector('#lifes>p');
let _gunshots = document.querySelector('#gunshots>p');
let _speed = document.querySelector('#speed>p');
let _width = document.querySelector('#paddle-width>p');

//////////////////////////////////////////////
//CANVAS
let _pauseScreen = document.querySelector('#pause');

let _screen = document.querySelector('#screen');
let _message = document.querySelector('#message');
let _play = document.querySelector('#play');
let _replay = document.querySelector('#replay');
let _next = document.querySelector('#next');
let _restart = document.querySelector('#restart');
let screenButtons = [_message, _play, _replay, _next, _restart];
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

App.startApp();
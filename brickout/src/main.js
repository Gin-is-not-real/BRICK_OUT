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
let _title = document.querySelector('#screen h2');
let _message = document.querySelector('#message');
let _playNormal = document.querySelector('#play-normal');
let _lvlsList = document.querySelector('#lvls-list');

let _replay = document.querySelector('#replay');
let _next = document.querySelector('#next');
let _restart = document.querySelector('#restart');
let screenButtons = [_message, _playNormal, _replay, _next, _restart];

let _scores = document.querySelector('#score');
let _ul = document.querySelector('#scores-list');

let _formContainer = document.querySelector('#form');
let _inputName = _formContainer.querySelector('#name');
let _inputScore = _formContainer.querySelector('#score');
let _submit = _formContainer.querySelector('#submit');
//////////////////////////////////////////////
//ctx
let _canvas = document.querySelector('canvas');
let ctx = _canvas.getContext('2d');
let frame;
let server_on = document.location.href.includes('http') ? true : false;

/*
    App contains methods for control animations and call functions draw() and move() of objects
    Lvl contains methods for manage bricks and drops
*/
let app = new App();
let paddle = new Paddle();
let ball = new Ball();
let lvl = new Lvl();

App.startApp();
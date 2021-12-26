//////////////////////////////////////////////
//DEV
let _dev = document.querySelector('#switch-dev')
let _restart = document.querySelector('#restart');
let _changeLvl = document.querySelector('#change-lvl');
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

App.initLvl(lvl1);





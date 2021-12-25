//////////////////////////////////////////////
//DEV
let _run = document.querySelector('#run');
let _stop = document.querySelector('#stop');
let _restart = document.querySelector('#restart');
//////////////////////////////////////////////
//APP
let _canvas = document.querySelector('canvas');
let ctx = _canvas.getContext('2d');
let frame;

let app = new App();
let paddle = new Paddle();
let ball = new Ball();
let lvl = new Lvl();
lvl.init(lvl1);

App.initLvl();



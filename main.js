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

App.initLvl();


let b = new Brick();
b.x = 10;
b.y = 1;
b.draw();

//////////////////////////////////////////////
//CANVAS
_canvas.addEventListener('mousemove', function(e) {
    if(app.state !== 'stop') {
        paddle.move(e.offsetX);
        if(app.state === 'init') {
            ball.init();
        }
        App.draw();
    }
})
_canvas.addEventListener("click", function(e) {
    console.log('click: ', app.state);

    if(app.state === 'run') {
        App.pause();
        _run.textContent = 'play';
    }
    else if(app.state === 'stop') {
        App.initBall();
        _run.textContent = 'play';
    }
    else if(app.state === 'init' || app.state === 'pause') {
        App.run();
        _run.textContent = 'pause';
    }
    e.stopPropagation();
})

//////////////////////////////////////////////
//DEV FUNCTIONS
_run.addEventListener('click', function(e){
    if(app.state === 'run') {
        App.pause();
        _run.textContent = 'play';
    }
    else {
        App.run();
        _run.textContent = 'pause';
    }
});
_stop.addEventListener('click', function() {
    App.stop();
})
_restart.addEventListener('click', function() {
    App.initLvl();
})
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
    }
    else if(app.state === 'stop') {
        App.initBall();
    }
    else if(app.state === 'init' || app.state === 'pause') {
        App.run();
    }
    e.stopPropagation();
})

//////////////////////////////////////////////
//DEV FUNCTIONS
_restart.addEventListener('click', function() {
    App.initLvl(lvl1);
})
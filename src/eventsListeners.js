//////////////////////////////////////////////
//KEYS
document.addEventListener('keypress', function(e) {
    //space
    // if(e.keyCode === 32) {
    //     if(app.state === 'run') {
    //         App.pause();
    //     }
    //     else if (app.state === 'init' || app.state === 'pause') {
    //         App.run();
    //     }
    //     else if(app.state === 'stop') {
    //         App.initBall();
    //     }
    // }
    if(e.key === 'w' && app.state !== 'pause' && app.state !== 'stop' && app.state !== 'start') {
        // console.log(e.keyCode);
        paddle.shoot();
    }
})

//////////////////////////////////////////////
//SCREENS BUTTONS
_play.addEventListener('click', function() {
    App.playNormalGame();
    _screen.classList.add('hidden');
    _play.classList.add('hidden');
})

_replay.addEventListener('click', function() {
    App.playNormalGame();
    _screen.classList.add('hidden');
    _replay.classList.add('hidden');
})

_next.addEventListener('click', function() {
    App.initLvl(lvls[app.lvlIndex]);
    _screen.classList.add('hidden');
    _next.classList.add('hidden');
})

_restart.addEventListener('click', function() {
    App.startApp();
    _restart.classList.add('hidden');
})
//////////////////////////////////////////////
//CANVAS
_canvas.addEventListener('mousemove', function(e) {
    if(app.state !== 'stop' && app.state !== 'start' && app.state !== 'pause') {
        paddle.move(e.offsetX);

        //stick the ball on the paddle
        if(app.state === 'init') {
            ball.init();
        }

        App.draw();
    }
})

_canvas.addEventListener("click", function(e) {
    if(app.state === 'run') {
        App.pause();
    }
    else if(app.state === 'stop') {
        App.initBall();
    }
    else if(app.state === 'init' || app.state === 'pause') {
        App.run();
    }
    console.log('click: ', app.state);

    e.stopPropagation();
})
//////////////////////////////////////////////
//HUB

//////////////////////////////////////////////
//CANVAS
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

_win.addEventListener('click', function() {
    App.startApp();
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
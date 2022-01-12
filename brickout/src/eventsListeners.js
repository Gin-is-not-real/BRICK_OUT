//////////////////////////////////////////////
//KEYS
document.addEventListener('keypress', function(e) {
    //space
    if(e.keyCode === 32) {
        if(app.state === 'run') {
            App.pause();
        }
        else if(app.state === 'pause') {
            App.run();
        }
    }

    if((e.key === 'w' || e.key === 'x') && app.state !== 'pause' && app.state !== 'stop' && app.state !== 'start' && app.state !== 'init') {
        paddle.shoot();
    }
})

//////////////////////////////////////////////
//SCREENS BUTTONS
_pauseScreen.addEventListener('click', function() {
    Screen.hidePauseScreen();
    App.run();
})


_playNormal.addEventListener('click', function() {
    Screen.hideAll();
    Screen.displayChooseLvlMenu();
    // App.initNormalGame();
})

_replay.addEventListener('click', function() {
    Screen.hideAll();
    App.initNormalGame(app.lvlIndex);
})

_next.addEventListener('click', function() {
    Screen.hideAll();
    App.initLvl(lvls[app.lvlIndex]);
})

_restart.addEventListener('click', function() {
    Screen.hideAll();
    App.startApp();
})
//////////////////////////////////////////////
//CANVAS
_canvas.addEventListener('mousemove', function(e) {
    if(app.state !== 'stop' && app.state !== 'start' && app.state !== 'pause') {
        paddle.move(e.offsetX);

        if(app.state === 'init') {
            //stick the ball on the paddle
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
    else if(app.state === 'init') {
        App.run();
    }

    e.stopPropagation();
})

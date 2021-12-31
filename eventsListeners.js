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

//////////////////////////////////////////////
//DEV FUNCTIONS
_dev.addEventListener('click', function() {
    if(devIsActive) {
        devIsActive = false;
        this.textContent = 'active dev'
    }
    else {
        devIsActive = true;
        this.textContent = 'stop dev'
    }
})
_restart.addEventListener('click', function() {
    App.initLvl(lvl1);
})
_changeLvl.count = 0;
_changeLvl.addEventListener('click', function() {
    this.count = (this.count + 1) < lvls.length ? this.count +1 : 0;
    App.initLvl(lvls[this.count]);
})

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
// _run.addEventListener('click', function(e){
//     if(app.state === 'run') {
//         App.pause();
//         _run.textContent = 'play';
//     }
//     else {
//         App.run();
//         _run.textContent = 'pause';
//     }
// });
// _stop.addEventListener('click', function() {
//     App.stop();
// })
_restart.addEventListener('click', function() {
    App.initLvl(lvl1);
})
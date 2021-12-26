class App {
    state;

    static initLvl(lvlNum) {
        // console.log('app init lvl');
        app.state = 'init';
        lvl.init(lvlNum);
        App.initBall();
    }
    static initBall() {
        // console.log('app init ball');
        frame = 0;
        app.state = 'init';
        paddle.init();
        ball.init();
        App.draw();
    }
    static clear() {
        ctx.fillStyle = 'rgb(27, 21, 21)';
        ctx.fillRect(0, 0,_canvas.width,_canvas.height);
    }
    static draw() {
        App.clear();
        // ctx.fillStyle = 'rgba(27, 21, 21, 0.45)';
        // ctx.fillRect(0, 0,_canvas.width,_canvas.height);
        paddle.draw();
        ball.draw();
        lvl.draw();
    }
    static run() {
        // if(frame === 0) {
        //     // console.log('app run');
        // }
        if(frame !== undefined) {
            frame = window.requestAnimationFrame(App.run);
        }
        app.state = 'run';

        lvl.checkExposedBricks();
        lvl.detectAffectedBricks();
        
        ball.move();
        App.draw();
    }
    static pause() {
        // console.log('app pause');
        window.cancelAnimationFrame(frame);
        app.state = 'pause';
    }
    static stop() {
        // console.log('app stop');
        window.cancelAnimationFrame(frame);
        frame = undefined;
        app.state = 'stop';
        App.clear();
    }

}

  


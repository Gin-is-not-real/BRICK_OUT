/**@property {String} state can take the values init, run, pause, stop
 * 
 * @method initLvl()
 * @method initBall()
 * @method clear()
 * @method draw()
 * @method run()
 * @method pause()
 * @method stop()
 */

class App {
    state;

    static initLvl(lvlNum) {
        app.state = 'init';
        lvl.initBricks(lvlNum);
        App.initBall();
    }

    static initBall() {
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
        if(frame !== undefined) {
            frame = window.requestAnimationFrame(App.run);
        }
        app.state = 'run';

        lvl.checkExposedBricks();
        lvl.defineAffectedBricks();
        
        ball.move();
        App.draw();
    }

    static pause() {
        window.cancelAnimationFrame(frame);
        app.state = 'pause';
    }

    static stop() {
        window.cancelAnimationFrame(frame);
        frame = undefined;
        app.state = 'stop';
        App.clear();
    }

}

  


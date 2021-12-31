/**
 * Contains methods for control animations and call functions draw() and move() of objects
 * @property {String} state can take the values init, run, pause, stop
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
    state = 'start';

    static initLvl(lvlNum) {
        app.state = 'init';
        lvl.initBricks(lvlNum);
        App.initBall();
    }

    /**
     * Set the frame var to 0 and the app state to 'init', and initialise paddle and ball to their initial positions, and draw the canvas
     * 
     */
    static initBall() {
        frame = 0;
        app.state = 'init';
        paddle.init();
        ball.init();
        App.draw();
    }

    /**
     * Clear the canvas
     */
    static clearCanvas() {
        ctx.fillStyle = 'rgb(27, 21, 21)';
        ctx.fillRect(0, 0,_canvas.width,_canvas.height);
    }

    /**
     * Clean the canvas and draw paddle, ball, and lvl objects by calling their draw() functions
     */
    static draw() {
        App.clearCanvas();
        // ctx.fillStyle = 'rgba(27, 21, 21, 0.45)';
        // ctx.fillRect(0, 0,_canvas.width,_canvas.height);
        paddle.draw();
        ball.draw();
        lvl.draw();
    }

    /**
     * Set app state to 'run' and request an animation frame for calling the funtion in loop.
     * Check if brick if hitted and move falling drops by calling Lvl function checkForAffectedBricks() and moveDrops(), move ball and draw the canvas
     */
    static run() {
        if(frame !== undefined) {
            frame = window.requestAnimationFrame(App.run);
        }
        app.state = 'run';

        lvl.checkForAffectedBricks();
        lvl.moveDrops();

        ball.move();
        App.draw();
    }

    /**
     * Cancel the animation frame and set state to 'pause'
     */
    static pause() {
        window.cancelAnimationFrame(frame);
        app.state = 'pause';
    }

    /**
     * Cancel the animation frame an set it to undefined, set state to 'stop', and clear the canvas
     */
    static stop() {
        window.cancelAnimationFrame(frame);
        frame = undefined;
        app.state = 'stop';
        App.clearCanvas();
    }

}

  


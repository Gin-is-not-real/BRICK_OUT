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
    lifes = 0;
    lvlIndex = 0;
    points = 0;

    static start() {
        app.state = 'start';

        _win.classList.add('hidden');
        _screen.classList.remove('hidden');
        _play.classList.remove('hidden');
    }

    static playNormalGame() {
        app.lifes = 3;
        app.lvlIndex = 0;
        points = 0;

        _lifes.textContent = app.lifes;
        _lvl.textContent = app.lvlIndex + 1;
        _points.textContent = app.points;
        App.initLvl(lvls[app.lvlIndex]);
    }

    static winNormalLvl() { 
        app.lvlIndex ++;

        if(app.lvlIndex < lvls.length) {
            App.initLvl(lvls[app.lvlIndex]);
        }
        else {
            App.stop();
            _screen.classList.remove('hidden');
            _win.classList.remove('hidden');

            // App.winNormalGame();
        }
    }

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

    static loseBall() {
        app.lifes --;
        _lifes.textContent = app.lifes;

        if(app.lifes <= 0) {
            App.looseGame();
        }
        else {
            lvl.drops = [];
            App.pause();
            App.initBall();
        }
    }

    static looseGame() {
        App.stop();
        _screen.classList.remove('hidden');
        _replay.classList.remove('hidden');
    }

}

  


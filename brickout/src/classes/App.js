/**
 * Contains methods for control animations and call functions draw() and move() of objects
 * @property {String} state can take the values init, run, pause, stop
 * 
 * @method startApp() - Made appear the start button
 *
 * @method clear()
 * @method draw()
 * 
 * @method run()
 * @method pause()
 * @method stop()
 * 
 * @method initLvl()
 * @method initBall()
 * @method initNormalGame() - reset lvl index and points, and set lifes count to 3
 * @method winNormalLvl() - Increase app lvl index, and stop it if is the last lvl.
 * @method winNormalGame()
 * @method looseBall()
 * @method looseGame()
 */

class App {
    state = 'start';
    gameMode;
    lvlIndex;
    points;
    lifes;
    gunshots;
    stats;

    constructor() {
        this.stats = {
            bricks: [0, 0, 0],
            drops: 0
        };
    }

    /**
     * Made appear the start button
     */
    static startApp() {
        app.state = 'start';
        Screen.displayStartScreen();
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
        paddle.drawShoot();

        ball.draw();
        lvl.draw();
    }


    /**
     * Set app state to 'run' and request an animation frame for calling the funtion in loop.
     * Check if brick if hitted and move falling drops by calling Lvl function checkForAffectedBricks() and moveDrops(), move ball and draw the canvas
     */
    static run() {
        Screen.hidePauseScreen();

        app.state = 'run';
        if(frame !== undefined) {
            frame = window.requestAnimationFrame(App.run);
        }

        lvl.checkForAffectedBricks();

        lvl.moveDrops();
        ball.move();
        paddle.moveShoot();

        App.draw();
    }

    /**
     * Cancel the animation frame and set state to 'pause'
     */
    static pause() {
        Screen.displayPauseScreen();

        app.state = 'pause';
        window.cancelAnimationFrame(frame);
    }

    /**
     * Cancel the animation frame an set it to undefined, set state to 'stop', and clear the canvas
     */
    static stop() {
        app.state = 'stop';
        window.cancelAnimationFrame(frame);
        frame = undefined;
        App.clearCanvas();
    }


    /**
     * Set the application state to 'init', call lvl initBricks() and App initBall() method for initialize a level according to the pattern-array in parameter
     * 
     * @param {Array} lvlPattern an array representing the pattern of the lvl to init
     */
    static initLvl(lvlPattern) {
        app.state = 'init';
        lvl.initBricks(lvlPattern);
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
     * Init app vars for normal game. Update hub text contents and init the choosen lvl
     */
    static initNormalGame(lvlId) {
        app.gameMode = 'normal';
        App.setLvlIndex(lvlId);
        App.setPoints(0);
        App.setLifes(1);
        App.setGunshots(1);

        _speed.textContent = String(ball.vx).replace("-", "").substr(0, 3);
        _width.textContent = paddle.width;

        App.initLvl(lvls[app.lvlIndex]);
    }

    
    /**
     * Remove 1 life. If it the last life, call looseGame(). Else, clear drops on lvl, stop app and init and init a ball
     */
    static looseBall() {
        App.setLifes(app.lifes-1);

        if(app.lifes <= 0) {
            App.looseGame();
        }
        else {
            lvl.drops = [];
            App.stop();
            App.initBall();
        }
    }

    /**
     * Increase app lvl index. If it is the last lvl, App stop() and display 'win' button.
     */
    static winNormalLvl() { 
        App.stop();

        // if(app.lvlIndex +1 < lvls.length) {
        //     Screen.displayWinNormalLvl();
        //     App.setLvlIndex(app.lvlIndex + 1);
        // }
        // else {
        //     App.winNormalGame();
        // }

        App.winNormalGame();
    }

    static winNormalGame() {
        App.stop();
        Screen.displayWinNormalGame();
    }


    static looseGame() {
        App.stop();
        Screen.displayLooseLvl();

    }


    static setLvlIndex(index) {
        app.lvlIndex = index;
        _lvl.textContent = index + 1;
    }

    static setPoints(value) {
        app.points = value;
        _points.textContent = value;
    }    

    static setLifes(value) {
        app.lifes = value;
        _lifes.textContent = value;
    }

    static setGunshots(value) {
        app.gunshots = value;
        _gunshots.textContent = value;
    }
}

  


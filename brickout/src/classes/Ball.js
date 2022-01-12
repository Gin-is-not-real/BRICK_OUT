/**
 *@property {Integer} x
 *@property {Integer} y
 *@property {Integer} vx
 *@property {Integer} vy
 *@property {String} color
 *@property {Boolean} meteorMode
 * 
 * @method init() init this x and y properties for place ball on the paddle, init this vx and vy (speed) 
 * @method draw()
 * @method revert()
 * @method checkIfHit()
 * @method speedUp()
 * @method speedDown()
 * @method activeMeteorMode()
*/
class Ball {
    color;
    x; 
    y; 
    vx; 
    vy;
    meteorMode;

    constructor() {
        this.color = BALL_COLOR;
        this.x = paddle.x;
        this.y = paddle.y;
        this.vx = BALL_SPEED_START_VALUE;
        this.vy = - BALL_SPEED_START_VALUE;
        this.meteorMode = false;
    }

    /**
     * init this x and y properties for place ball on the paddle, init this vx and vy (speed)
     */
    init() {
        this.x = paddle.x + (paddle.width); 
        this.y = paddle.y - (PADDLE_HEIGHT/2);
        this.vx = BALL_SPEED_START_VALUE;
        this.vy = -BALL_SPEED_START_VALUE;
    }

    /**
     * Draw the ball with context2D function arc, using this x and y properties.
     */
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, BALL_RADIUS, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    /**
     * Reverses the direction of the x or y axis 
     * @param {String} axe - x or y. The axis that must be reversed
     */
    revert(axe) {
        this[axe] = -this[axe];
    }

    /**
     * Move the ball, having first checked if it touches the canvas limit or the paddle. If it, revert the axis concerned before moving, or destroy the ball if it hit the ground.
     */
    move() {
        let nextX = this.x;
        let nextY = this.y;

        //si la balle touche un bord, inverse les vitesses 
        if((nextX + BALL_RADIUS) > _canvas.width || (nextX - BALL_RADIUS) < 0) {
            this.revert('vx');
        }
        if(nextY - BALL_RADIUS < 0) {
            this.revert('vy');
        }
        
        //si la balle passe a hauteur du paddle
        else if((nextY + BALL_RADIUS) > paddle.y) {

            //If the ball it the ground
            if(nextY - BALL_RADIUS > _canvas.height) {
                // DEV
                if(devIsActive) {
                    this.revert('vy');
                }
                else {
                    App.looseBall();
                    // App.stop();
                    return
                }
            }
            else {
                this.checkIfHit(paddle);
            }
        }

        this.x += this.vx;
        this.y += this.vy;
    }

    /**
     * Check if one of the 4 cardinal points of the ball is in the path of a brick or paddle. If so, reverse the concerned axis and return true.
     * @param {Object} object - an object Brick or Paddle, that as a 'path' property
     */
    checkIfHit(object) {
        //Points de la balle
        let top = this.y - BALL_RADIUS;
        let bottom = this.y + BALL_RADIUS;
        let left = this.x - BALL_RADIUS;
        let right = this.x + BALL_RADIUS;

        let isHitting = false;

        //if meteor mode is active, the ball pass out the brick without being reverted
        let revertAvailable = true;
        if(object.constructor.name === 'Brick' && this.meteorMode === true) {
            revertAvailable = false;
            // console.log(object.constructor.name, ' revertAvailable', revertAvailable, this.meteorMode);
        }

        //If the ball go down
        if(this.vy > 0) {
            //point du bas
            if(ctx.isPointInPath(object.path, this.x, bottom)) {
                if(revertAvailable) {
                    this.revert('vy');
                }
                isHitting = true;
            }
        }
        else {
            //point du haut
            if(ctx.isPointInPath(object.path, this.x, top)) {
                if(revertAvailable) {
                    this.revert('vy');
                }
                isHitting = true;
            }
        }

        //If the ball go to the right
        if(this.vx > 0) {
            //point de droite
            if(ctx.isPointInPath(object.path, right, this.y)) {
                if(revertAvailable) {
                    this.revert('vx');
                }
                isHitting = true;
            }
        }
        //enlever cette partie si les collisions ne sont pas satisfaisantes
        else {
            //point de gauche
            if(ctx.isPointInPath(object.path, left, this.y)) {
                if(revertAvailable) {
                    this.revert('vx');
                }
                isHitting = true;
            }
        }

        return isHitting;
    }

    speedUp() {
        this.vx = this.vx > 0.1 ? this.vx + BALL_SPEED_STEP : this.vx < 0.01 ? this.vx - BALL_SPEED_STEP : this.vx;
        this.vy = this.vy > 0.1 ? this.vy + BALL_SPEED_STEP : this.vy < 0.01 ? this.vy - BALL_SPEED_STEP : this.vy;

        _speed.textContent = String(this.vx).replace("-", "").substr(0, 3);
    }

    speedDown() {
        this.vx = this.vx > 0.1 ? this.vx - BALL_SPEED_STEP : this.vx < 0.01 ? this.vx + BALL_SPEED_STEP : this.vx;
        this.vy = this.vy > 0.1 ? this.vy - BALL_SPEED_STEP : this.vy < 0.01 ? this.vy + BALL_SPEED_STEP : this.vy;

        _speed.textContent = String(this.vx).replace("-", "").substr(0, 3);
    }

    /**
     * Set meteorMode to true, and remove it with a timeout
     */
    activeMeteorMode() {
        this.meteorMode = true;
        this.color = 'red';

        let self = this;
        let timeout = setTimeout(function() {
            self.meteorMode = false;
            self.color = BALL_COLOR;
            clearTimeout(timeout);
        }, 4000);
        
    }
}


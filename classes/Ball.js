/**@property {Integer} radius
 *@property {Integer} x
 *@property {Integer} y
 *@property {Integer} vx
 *@property {Integer} vy
 *@property {String} color
 *@property {Integer} exp
 *@property {Boolean} meteorMode
 * 
 * @method init() init this x and y properties for place ball on the paddle, init this vx and vy (speed) 
 * @method draw()
 * @method revert()
 * @method checkIfHit()
 * @method upExp()
 * @method activeMeteorMode()
*/
class Ball {
    radius = 6;
    x = 100; 
    y = 120; 
    vx = 1;
    vy = -1;
    color = '#955b108a';
    exp;
    meteorMode = false;

    /**
     * init this x and y properties for place ball on the paddle, init this vx and vy (speed)
     */
    init() {
        this.x = paddle.x + (paddle.width); 
        this.y = paddle.y - (paddle.height/2);
        this.vx = 1;
        this.vy = -1;
        this.exp = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    revert(axe) {
        this[axe] = -this[axe];
    }

    move() {
        let nextX = this.x;
        let nextY = this.y;

        //si la balle touche un bord, inverse les vitesses 
        if((nextX + this.radius) > _canvas.width || (nextX - this.radius) < 0) {
            this.revert('vx');
        }
        if(nextY - this.radius < 0) {
            this.revert('vy');
        }
        
        //si la balle passe a hauteur du paddle
        else if((nextY + this.radius) > paddle.y) {

            //If the ball it the ground
            if(nextY - this.radius > _canvas.height) {
                // DEV
                if(devIsActive) {
                    this.revert('vy');
                }
                else {
                    App.loseBall();
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

    checkIfHit(object) {
        //Points de la balle
        let top = this.y - this.radius;
        let bottom = this.y + this.radius;
        let left = this.x - this.radius;
        let right = this.x + this.radius;

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

    upExp(nbr) {
        this.exp += nbr;

        // if(this.exp%10 == 0) {
        //     this.vx = this.vx < 0 ? this.vx + (-0.2) : this.vx +0.2;
        //     this.vy = this.vy < 0 ? this.vy + (-0.2) : this.vy +0.2;
        // }
        _playerXp.textContent = 'exp: ' + this.exp;
    }

    activeMeteorMode() {
        this.meteorMode = true;
        this.color = 'red';

        let self = this;
        let timeout = setTimeout(function() {
            self.meteorMode = false;
            self.color = '#955b108a';
            clearTimeout(timeout);
        }, 4000);
        
    }
}


let PADDLE_WIDTH = 35;

/**
 * Paddle contains methods for init, move, and draw it, using its properties. It also contains methods to manage shots
 * 
 * @property {Integer} width 
 * @property {String} color 
 * @property {Path2D} path 
 * @property {Integer} x 
 * @property {Integer} y 
 * @property {Array} rifles
 * 
 * @method init() initialize this x, y properies for place the paddle at the center of the canvas, and this with using the value of const PADDLE_WIDTH
 * @method draw() instanciate the Path2D, define this rect and color and draw it
 * @method move() redefine this x property and try to move it between the limit of canvas 
 * @method expand()
 * @method reduce()
 * @method shoot()
 * @method moveShoot()
 * @method drawShoot()
 */
class Paddle {
    width;
    color;
    path;
    x; 
    y;
    rifles;

    constructor() {
        this.width = PADDLE_WIDTH;
        this.color = PADDLE_COLOR;
        this.rifles = [];
    }

    /**
     * initialize this x, y properies for place the paddle at the center of the canvas, and this with using the value of const PADDLE_WIDTH
     */
    init() {
        this.x = (_canvas.width/2) - (this.width/2); 
        this.y = _canvas.height - 30;
        this.width = PADDLE_WIDTH;
    }

    /**
     * instanciate the Path2D, define this rect and color and draw it
     */
    draw() {
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width-2, PADDLE_HEIGHT-2);
        ctx.fillStyle = this.color;
        ctx.fill(this.path);
    }

    /**
     * redefine this x property and try to move it between the limit of canvas
     * @param {Integer} x 
     */
    move(x) {
        this.x = x - (this.width/2);

        if ((this.x + this.width) > _canvas.width) {
            this.x = _canvas.width - this.width;
        }

        if (this.x < 0) {
            this.x = 0;
        }
    }

    expand() {
        this.width += 4;
    }

    reduce() {
        if(this.width > 14) {
            this.width -= 4;
        }
    }

    shoot() {
        if(app.gunshots > 0) {
            App.setGunshots(app.gunshots -1);

            let x = this.x + (this.width/2);
            let y = this.y;
            this.rifles.push({x: x, y: y});
        }
    }

    moveShoot() {
        for(let i = 0; i < this.rifles.length; i++) {

            if(this.rifles[i] !== undefined) {
                let y = this.rifles[i].y -2;
                this.rifles[i].y = y;

                //coordonnée y du bas du tab de briques
                let bottom = lvl.bricks.length * BRICK_HEIGHT;
                
                //si y atteind le bas du tab de briques
                if(y <= bottom) {
                    //si y sort
                    if(y < 0) {
                        this.rifles[i] = undefined;
                    }
                    else {
                        //definir la colonne du tab avec this.rifles[i].x/BRICK_WIDTH +1
                        let colIndex = parseInt(this.rifles[i].x/BRICK_WIDTH);

                        for(let j = lvl.bricks.length-1; j > 0; j --) {
                            let brick = lvl.bricks[j][colIndex];

                            if(brick !== undefined && brick !== null) {
                                this.rifles[i] = undefined;
                                lvl.destroyBrick(brick.line, brick.column);

                                break;
                            }
                            else {
                                this.rifles[i].y = y;
                            }
                        }
                    }
                }
            }

        }
    }

    drawShoot() {
        for(let i = 0; i < this.rifles.length; i++) {

            if(this.rifles[i] !== undefined) {
                ctx.beginPath();
                ctx.rect(this.rifles[i].x, this.rifles[i].y-1, 2, 6);
                ctx.closePath();
    
                ctx.strokeStyle = 'white';
                ctx.stroke();   
            }
        }
    }
}
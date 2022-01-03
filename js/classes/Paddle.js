let PADDLE_WIDTH = 35;

/**
 * Paddle contains methods for init, draw and move it.
 * 
 * @property {Integer} width 
 * @property {Integer} height 
 * @property {String} color 
 * @property {Path2D} path 
 * @property {Integer} x 
 * @property {Integer} y 
 * 
 * @method init() initialize this x, y properies for place the paddle at the center of the canvas, and this with using the value of const PADDLE_WIDTH
 * @method draw() instanciate the Path2D, define this rect and color and draw it
 * @method move() redefine this x property and try to move it between the limit of canvas 
 */
class Paddle {
    width = PADDLE_WIDTH;
    height = 10;
    color = '#955b108a';
    path;
    x; 
    y;
    gunshot;

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
        this.path.rect(this.x, this.y, this.width-2, this.height-2);
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
        let x = this.x + (this.width/2);
        let y = this.y;
        this.gunshot = {x: x, y: y};
    }

    moveShoot() {
        if(this.gunshot !== undefined) {
            let y = this.gunshot.y -1;
            this.gunshot.y = y;

            //coordonnée y du bas du tab de briques
            let bottom = lvl.bricks.length * BRICK_HEIGHT;

            //si y atteind le bas du tab de briques
            if(y <= bottom) {
                //si y sort
                if(y < 0) {
                    this.gunshot = undefined;
                    console.log('clear gunshot');
                }
                else {
                    //definir la colonne du tab avec this.gunshot.x/BRICK_WIDTH +1
                    // let colIndex = parseInt(this.gunshot.x/BRICK_WIDTH +1);

                    // for(let i = 0; i < lvl.bricks.length; i ++) {
                    //     let brick = lvl.bricks[i][colIndex];

                    //     if(brick !== undefined && brick !== null) {
                    //         console.log('touch');
                    //         lvl.drops.push(brick.changeInDrop());
                    //         lvl.bricks[i][colIndex] = null;
    
                    //         app.points += brick.exp;
                    //         app.stats.bricks[brick.durability] ++;

                    //         _points.textContent = app.points;
                    //     }
                    // }
                    this.gunshot.y = y;
                }
            }

            //soit lenght du tab*brick height
            // else if(y <= lvl.bricks.lenght) {

            // }
            // console.log(this.gunshot.x/BRICK_WIDTH +1);
        }
    }

    drawShoot() {
        if(this.gunshot !== undefined) {
            // console.log('gunshot ', this.gunshot);

            ctx.beginPath();
            ctx.rect(this.gunshot.x, this.gunshot.y-1, 2, 6);
            ctx.closePath();

            ctx.strokeStyle = 'white';
            ctx.stroke();
        }
    }
}
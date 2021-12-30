/**@property {Array} bricks 
/**@property {Array} exposed 
 * 
 * @method initBricks()
 * @method draw()
 * @method clear()
 * @method checkExposedBricks()
 * @method defineAffectedBricks()
 */
class Lvl {
    bricks;
    exposed;

    /**
     * Init lvl by instanciate bricks. Loop on the array in parameter and use id stored for create new Brick. Call the init() method of each new Brick.
     * @param {Array} pattern multidimensionnal array of ids
     */
    initBricks(pattern) {
        let bricks = [];
        for(let i = 0; i < pattern.length; i++) {
            let line = [];

            for(let j = 0; j < pattern[i].length; j++) {
                let id = pattern[i][j];

                let brick = null;
                if(id !== 0) {
                    brick = new Brick(id);
                    let x = (j*brick.width)+1;
                    let y = (i*brick.height)+1;
                    brick.initPath(x, y);
                }
                line.push(brick);
            }
            bricks.push(line);
        }
        this.bricks = bricks;
        console.log(bricks);
    }

    draw() {
        this.bricks.forEach(line => {
            line.forEach(brick => {
                if(brick !== null) {
                    brick.draw();
                }
            })
        })
    }

    /**
     * Check for each brick if it has a neighbor. If it doesn't not have one, it is pushed into the exposed array. Define exposed array of the object
     */
    checkExposedBricks() {
        let exposed = [];
        let bricks = this.bricks;
        
        for(let i = 0; i < bricks.length; i++) {
            for(let j = 0; j < bricks[i].length; j++) {
                let brick = bricks[i][j];

                if(
                    i > 0 && (bricks[i-1] === undefined || bricks[i-1][j] === null) ||
                    i < bricks.length && (bricks[i+1] === undefined || bricks[i+1][j] === null) ||
                    j > 0 && (bricks[i][j-1] === undefined || bricks[i][j-1] === null) ||
                    j < (bricks[i].length -1) &&  (bricks[i][j+1] === undefined || bricks[i][j+1] === null)
                ) {
                    exposed.push({brick: brick, i: i, j:j});
                }
            }
        }
        this.exposed = exposed;
    }

    /**
     * Loop on an bricks array and foreach brick, call the Ball method checkIfHit() that check if the ball is in the path of the brick. Decrease brick durability if affected. If it destroyed, increase ball exp
     */
    defineAffectedBricks() {
        let bricks = this.bricks;

        this.exposed.forEach(b => {
            let brick = bricks[b.i][b.j];

            if(brick !== null) {
                let isHit = ball.checkIfHit(brick.path);

                if(isHit) {
                    bricks[b.i][b.j].durability --;

                    if(bricks[b.i][b.j].durability < 0) {
                        ball.upExp(brick.exp);
                        bricks[b.i][b.j] = null;
                    }
                }
            }
        })

        this.bricks = bricks;
    }
}
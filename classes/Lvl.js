/**
 * Contains methods for manage bricks and drops
 * @property {Array} bricks 
 * 
 * @method initBricks()
 * @method draw()
 * @method clear()
 * @method getExposedBricks()
 * @method checkIfExposed()
 * @method checkForAffectedBricks()
 * @method moveDrops()
 */
class Lvl {
    bricks;
    drops;

    /**
     * Init lvl by instanciate bricks. Loop on the array in parameter and use id stored for create new Brick. Call the init() method of each new Brick.
     * @param {Array} pattern multidimensionnal array of ids
     */
    initBricks(pattern) {
        this.drops = [];
        
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
    }

    /**
     * Draw bricks and drops by calling their draw() functions
     */
    draw() {
        this.bricks.forEach(line => {
            line.forEach(brick => {
                if(brick !== null) {
                    brick.draw();
                }
            })
        })
        this.drops.forEach(drop => {
            drop.draw();
        })
    }

    /**
     * Check for each brick if it has a neighbor. If it doesn't not have one, it is pushed into the exposed array. Define exposed array of the object
     */
    getExposedBricks() {
        let exposed = [];
        let bricks = this.bricks;
        
        for(let i = 0; i < bricks.length; i++) {
            for(let j = 0; j < bricks[i].length; j++) {
                if(bricks[i][j] !== null) {
                    if(this.checkIfExposed(i, j) === true) {
                        exposed.push({brick: bricks[i][j], i: i, j:j});
                    }
                }
            }
        }
        console.log(exposed.length)

        if(exposed === undefined || exposed.length <= 0) {
            console.log('no exposed')
            App.pause();
            App.winNormalLvl();
            return;
        }

        return exposed;

    }

    checkIfExposed(line, index) {
        let bricks = this.bricks;
        if(
            line > 0 && (bricks[line-1] === undefined || bricks[line-1][index] === null) ||
            line < bricks.length && (bricks[line+1] === undefined || bricks[line+1][index] === null) ||
            index > 0 && (bricks[line][index-1] === undefined || bricks[line][index-1] === null) ||
            index < (bricks[line].length -1) &&  (bricks[line][index+1] === undefined || bricks[line][index+1] === null)
        ) {
            return true;
        }
        return false;
    }

    /**
     * Loop on the exposed bricks array and foreach brick, call the Ball method checkIfHit() that check if the ball is in the path of the brick. Decrease brick durability if affected. If it destroyed, increase ball exp
     */
    checkForAffectedBricks() {
        let bricks = this.bricks;
        let exposed = this.getExposedBricks();

        if(exposed !== undefined) {
            exposed.forEach(b => {
                let brick = bricks[b.i][b.j];
    
                if(brick !== null) {
                    let isHit = ball.checkIfHit(brick);
    
                    if(isHit) {
                        bricks[b.i][b.j].durability --;
    
                        if(bricks[b.i][b.j].durability < 0) {
                            this.drops.push(brick.changeInDrop());
    
                            bricks[b.i][b.j] = null;
    
                            ball.upExp(brick.exp);
                        }
                    }
                }
            })
            this.bricks = bricks;
        }
    }

    moveDrops() {
        let drops = this.drops;

        if(drops.length > 0) {
            drops.forEach(drop => {
                let isRemove = drop.move();
                if(isRemove) {
                    drops.splice(drops.indexOf(drop), 1);
                }
            });
        }

        this.drops = drops;
    }
}
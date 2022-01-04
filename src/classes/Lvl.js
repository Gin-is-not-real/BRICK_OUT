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
                    brick = new Brick(id, i, j);
                    let x = (j*BRICK_WIDTH)+1;
                    let y = (i*BRICK_HEIGHT)+1;
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
                        // exposed.push({brick: bricks[i][j], i: i, j:j});
                        exposed.push(bricks[i][j]);
                    }
                }
            }
        }

        if(exposed === undefined || exposed.length <= 0) {
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
                let brick = bricks[b.line][b.column];
    
                if(brick !== null) {
                    let isHit = ball.checkIfHit(brick);
    
                    if(isHit) {
                        bricks[b.line][b.column].durability --;
    
                        if(bricks[b.line][b.column].durability < 0) {
                            this.destroyBrick(b.line, b.column);
                        }
                    }
                }
            })
            this.bricks = bricks;
        }
    }

    destroyBrick(line, column) {
        let brick = this.bricks[line][column];
        let drop = new Drop(brick.points, brick.x + (BRICK_WIDTH/2) - 5, brick.y + (BRICK_HEIGHT/2) - 4);
        this.drops.push(drop);

        app.points += brick.points;
        _points.textContent = app.points;

        app.stats.bricks[brick.durability] ++;

        this.bricks[line][column] = null;
    }

    /**
     * Move drops by calling their fonction move and check if it has been caught 
     */
    moveDrops() {
        let drops = this.drops;

        if(drops.length > 0) {
            drops.forEach(drop => {
                let isRemove = drop.move();
                if(isRemove) {
                    drops.splice(drops.indexOf(drop), 1);

                    if(isRemove === 'catched') {
                        app.stats.drops ++;
                        //add to points
                        app.points ++;
                        _points.textContent = app.points;
                    }
                }
            });
        }

        this.drops = drops;
    }
}
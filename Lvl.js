class Lvl {
    bricks;
    exposed;

    init(lvl) {
        let bricks = app.mode === 'survival' ? this.bricks || [] : [];
        
        for(let i = 0; i < lvl.length; i++) {
            let line = [];

            for(let j = 0; j < lvl[i].length; j++) {
                let box = lvl[i][j];
                let brick = null;
                if(box !== null && box !== 'n') {
                    brick = new Brick();
                    let x = (j*brick.width)+1;
                    let y = (i*brick.height)+1;
                    brick.init(x, y, box);
                }
                line.push(brick);
            }
            bricks.push(line);
        }
        this.bricks = bricks;
        console.log(bricks);
    }

    draw(num) {
        for(let i = 0; i < (num || this.bricks.length); i++) {
            this.bricks[i].forEach(brick => {
                if(brick !== null) {
                    brick.draw();
                }
            })
        }
    }

    checkExposedBricks(bricksArray) {
        let exposed = [];

        let bricks = bricksArray;
        for(let i = 0; i < bricks.length; i++) {
            for(let j = 0; j < bricks[i].length; j++) {
                let brick = bricks[i][j];

                //remettre des if a la place des else si j'ai besoin de connaitre la direction
                if(brick !== null) {
                    let isExposed = false;
                    if(i > 0 && (bricks[i-1] === undefined ||bricks[i-1][j] === null)) {
                        isExposed = true;
                    }
                    else if(i < (bricks.length) && (bricks[i+1] === undefined || bricks[i+1][j] === null)) {
                        isExposed = true;
                    }
                    else if(j > 0 && (bricks[i][j-1] === undefined || bricks[i][j-1] === null)) {
                        isExposed = true;
                    }
                    else if(j < (bricks[i].length -1) && ( bricks[i][j+1] === undefined || bricks[i][j+1] === null)) {
                        isExposed = true;
                    }
                    if(isExposed === true) {
                        exposed.push({brick: brick, i: i, j:j});
                        // brick.isExposed = isExposed;
                        // brick.color = 'green';
                    }
                }
            }
        }
        this.exposed = exposed;
    }

    detectAffectedBricks() {
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
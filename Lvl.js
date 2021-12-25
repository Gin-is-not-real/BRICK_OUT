let lvl1 = [
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
    ['j', 'o', 'o', 'o', 'r', 'r', 'o', 'o', 'o', 'j'],
    ['j', 'j', 'j', 'j', 'o', 'o', 'j', 'j', 'j', 'j'],
    ['j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'],
];
let lvl2 = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, 'o', 'o', 'r', 'r', 'o', 'o', null, null],
    [null, null, 'j', 'j', 'o', 'o', 'j', 'j', null, null],
    [null, null, 'j', 'j', 'j', 'j', 'j', 'j', null, null],
];

class Lvl {
    bricks;

    init(lvl) {
        let bricks = [];
        for(let i = 0; i < lvl.length; i++) {
            for(let j = 0; j < lvl[i].length; j++) {
                let box = lvl[i][j];
                let brick = null;
                if(box !== null) {
                    brick = new Brick();
                    switch(box) {
                        case 'j':
                            brick.color = 'yellow';
                            break;
                        case 'o':
                            brick.color = 'orange';
                            break;
                        case 'r':
                            brick.color = 'red';
                            break;
                    }
                    let x = (j*brick.width)+1;
                    let y = (i*brick.height)+1;
                    brick.init(x, y);
                }
                bricks.push(brick);
            }
        }
        this.bricks = bricks;
        console.log(bricks);
    }

    draw() {
        this.bricks.forEach(brick => {
            if(brick !== null) {
                brick.draw();
            }
        });
    }

    detectColisions() {
        this.bricks.forEach(brick => {
            if(brick !== null) {
                let isTouched = brick.detectColision();
                if(isTouched) {
                    this.bricks[this.bricks.indexOf(brick)] = null;
                }
            }
        })
    }
}
let lvl1 = [
    ['j', 'o', 'o', 'j', 'r', 'r', 'j', 'o', 'o', 'j'],
    ['j', 'o', 'o', 'o', 'r', 'r', 'o', 'o', 'o', 'j'],
    ['j', 'j', 'j', 'j', 'o', 'o', 'j', 'j', 'j', 'j'],
    ['j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j', 'j'],
];

class Lvl {
    bricks;

    constructor() {
        this.bricks = [];
    }

    init(lvl) {
        let bricks = [];
        for(let i = 0; i < lvl.length; i++) {
            for(let j = 0; j < lvl[i].length; j++) {
                let box = lvl[i][j];
                let brick = new Brick();
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
                bricks.push(brick);
            }
        }
        this.bricks = bricks;
    }

    draw() {
        this.bricks.forEach(brick => {
                brick.draw();
        });
    }

    detectColisions() {
        this.bricks.forEach(brick => {
                brick.detectColision();
        })
    }
}
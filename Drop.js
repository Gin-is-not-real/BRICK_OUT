const DROP_WIDTH = 10;
const DROP_HEIGHT = 8;
const DROP_BONUS = [
    [
        {name: 'speed+', color1: 'yellow', color2: 'orange'},
        {name: 'paddle+', color1: 'yellow', color2: 'green'},
        {name: 'speed-', color1: 'red', color2: 'orange'},
        {name: 'paddle-', color1: 'red', color2: 'green'},
    ]
];

class Drop {
    lvl;
    x;
    y;
    path;
    bonus;

    constructor(lvl, x, y) {
        this.lvl = lvl;
        this.bonus = this.getAleatoryBonus();

        this.initPath(x, y);
    }

    getAleatoryBonus() {
        let rand = Math.floor(Math.random()*DROP_BONUS[0].length);
        return DROP_BONUS[0][rand];
    }

    initPath(x, y) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, 10, 8);
    }

    draw() {
        ctx.strokeStyle = this.bonus.color1;
        ctx.stroke(this.path);
        ctx.fillStyle = this.bonus.color2;
        ctx.fill(this.path);
    }

    move() {
        let y = this.y + 1;

        if((y) + DROP_HEIGHT > paddle.y) {
            if((y) + DROP_HEIGHT > _canvas.height) {
                //destroy
                console.log('destroyed');
                return true;
            }
            else {
                if(this.x > paddle.x && this.x < (paddle.x + paddle.width)) {
                    return true;
                }
            }
        }
        
        this.initPath(this.x, y);
        return false;
    }
}
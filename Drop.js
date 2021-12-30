let BONUS = [
    [
        {name: 'speed+', color1: 'yellow', color2: 'orange'},
        {name: 'paddle+', color1: 'yellow', color2: 'green'},
        {name: 'speed-', color1: 'red', color2: 'orange'},
        {name: 'paddle-', color1: 'red', color2: 'green'},
    ]
]

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
        console.log(this);
    }

    getAleatoryBonus() {
        let rand = Math.floor(Math.random()*BONUS[0].length);
        return BONUS[0][rand];
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
        this.initPath(this.x, this.y +1);
    }
}
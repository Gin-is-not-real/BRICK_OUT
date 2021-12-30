let COLORS = ['yellow', 'orange', 'red'];
let TYPES = [
    {durability: 0, exp: 1},
    {durability: 1, exp: 2},
    {durability: 2, exp: 3},
];

/**
 * @property {Integer} width 
 * @property {Integer} height 
 * @property {Integer} durability 
 * @property {Integer} exp 
 * @property {Path2D} path 
 * @property {Integer} x 
 * @property {Integer} y 
 * 
 * @method initPath()
 * @method draw()
 * @method becomeDrop()
 * @method move()
 */
class Brick {
    width = 33;
    height = 16;
    durability;
    exp;
    path;
    x; 
    y;

    constructor(typeId) {
        let type = TYPES[typeId-1];
        this.durability = type.durability;
        this.exp = type.exp;
    }

    initPath(x, y) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width-2, this.height-2);
    }

    draw() {
        ctx.strokeStyle = COLORS[this.durability];
        ctx.stroke(this.path);
    }

    becomeDrop() {
        let x = this.x + (this.width/2) - 5;
        let y = this.y + (this.height/2) - 4;
        this.width = 10;
        this.height = 8;
        this.initPath(x, y);
    }

    move() {
        this.y ++;
        this.initPath(this.x, this.y);
    }
}

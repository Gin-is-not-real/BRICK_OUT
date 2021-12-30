let COLORS = ['yellow', 'orange', 'red'];
let TYPES = [
    {color: 'yellow', durability: 0, exp: 1},
    {color: 'orange', durability: 1, exp: 2},
    {color: 'red', durability: 2, exp: 3},
];

/**@property {Integer} width 
/**@property {Integer} height 
/**@property {Integer} durability 
/**@property {Integer} exp 
/**@property {Path2D} path 
/**@property {Integer} x 
/**@property {Integer} y 
 * 
 * @method initPath()
 * @method draw()
 */
class Brick {
    width = 33;
    height = 16;
    durability;
    exp;
    color;
    path;
    x; 
    y;

    constructor(typeId) {
        let type = TYPES[typeId-1];
        this.color = type.color;
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

}

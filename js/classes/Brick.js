let DURABILTY_COLORS = ['yellow', 'orange', 'red'];


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
 * @method changeInDrop()
 */
class Brick {
    width = BRICK_WIDTH;
    height = BRICK_HEIGHT;
    durability;
    exp;
    path;
    x; 
    y;
    line;
    column;

    constructor(typeId, line, column) {
        let type = BRICK_TYPES[typeId-1];
        this.durability = type.durability;
        this.exp = type.exp;

        this.line = line;
        this.column = column;
    }

    initPath(x, y) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width-2, this.height-2);
    }

    draw() {
        ctx.strokeStyle = DURABILTY_COLORS[this.durability];
        ctx.stroke(this.path);
    }

    changeInDrop() {
        let drop = new Drop(this.exp, this.x + (this.width/2) - 5, this.y + (this.height/2) - 4);

        return drop;
    }
}

/**
 * @property {Integer} width 
 * @property {Integer} height 
 * @property {Integer} durability 
 * @property {Integer} points 
 * @property {Path2D} path 
 * @property {Integer} x 
 * @property {Integer} y 
 * 
 * @method initPath()
 * @method draw()
 * @method changeInDrop()
 */
class Brick {
    durability;
    points;
    path;
    x; 
    y;
    line;
    column;

    constructor(typeId, line, column) {
        let type = BRICK_TYPES[typeId-1];
        this.durability = type.durability;
        this.points = type.points;

        this.line = line;
        this.column = column;
    }

    initPath(x, y) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, BRICK_WIDTH-2, BRICK_HEIGHT-2);
    }

    draw() {
        ctx.lineWidth = 1.25;

        ctx.strokeStyle = DURABILTY_COLORS[this.durability];
        ctx.stroke(this.path);
        
        ctx.strokeRect((this.x + BRICK_WIDTH) - 25, this.y + 3, 7, 2);
    }
}

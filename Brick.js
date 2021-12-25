class Brick {
    width = 33;
    height = 15;
    color;
    path;
    x; 
    y;

    constructor() {
        this.path = new Path2D();
    }

    init(x, y) {
        this.x = x;
        this.y = y;
        this.path.rect(this.x, this.y, this.width-2, this.height);
    }

    draw() {
        ctx.strokeStyle = this.color;
        ctx.stroke(this.path);
    }

}

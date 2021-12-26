class Brick {
    width = 33;
    height = 16;
    color;
    path;
    x; 
    y;

    init(x, y) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width-2, this.height-2);
    }

    draw() {
        ctx.strokeStyle = this.color;
        ctx.stroke(this.path);
    }

}

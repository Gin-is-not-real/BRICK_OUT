class Brick {
    width = 35;
    height = 15;
    color = 'rgb(167, 108, 46)';
    path;
    x; 
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width, this.height);
    }

    draw() {
        ctx.strokeStyle = this.color;
        ctx.stroke(this.path);
    }

}

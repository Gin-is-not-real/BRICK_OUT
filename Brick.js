class Brick {
    width = 33;
    height = 16;
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
        this.path.rect(this.x, this.y, this.width-2, this.height-2);
    }

    draw() {
        ctx.strokeStyle = this.color;
        ctx.stroke(this.path);
    }

    detectColision() {
        let top = ball.y - ball.radius;
        let bottom = ball.y + ball.radius;
        let left = ball.x - ball.radius;
        let right = ball.x + ball.radius;

        if(ctx.isPointInPath(this.path, left, top) ||ctx.isPointInPath(this.path, right, top)) {
            console.log('touch');
            ball.vy = -ball.vy;
        }
    }
}

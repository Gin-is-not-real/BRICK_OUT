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

    detectColision() {
        let top = ball.y - ball.radius;
        let bottom = ball.y + ball.radius;
        let left = ball.x - ball.radius;
        let right = ball.x + ball.radius;

        let touch = false;
        if(
            ctx.isPointInPath(this.path, left-2, top) ||
            ctx.isPointInPath(this.path, right+2, top) ||
            ctx.isPointInPath(this.path, left+ball.radius, top) ||
            ctx.isPointInPath(this.path, left-2, bottom) ||
            ctx.isPointInPath(this.path, right+2, bottom) ||
            ctx.isPointInPath(this.path, left+ball.radius, bottom)
        ) {
            ball.vy = -ball.vy;
            touch = true;
        }
        
        return touch;

    }
}

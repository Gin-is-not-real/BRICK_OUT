let PADDLE_WIDTH = 35;

class Paddle {
    width = PADDLE_WIDTH;
    height = 10;
    color = '#955b108a';
    path;
    x; 
    y;

    init() {
        this.x = (_canvas.width/2) - (this.width/2); 
        this.y = _canvas.height - 30;
        this.width = PADDLE_WIDTH;
    }
    draw() {
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width-2, this.height-2);
        ctx.fillStyle = this.color;
        ctx.fill(this.path);
    }
    move(x) {
        this.x = x - (this.width/2);
        if ((this.x + this.width) > _canvas.width) {
            this.x = _canvas.width - this.width;
        }
        if (this.x < 0) {
            this.x = 0;
        }
    }


}
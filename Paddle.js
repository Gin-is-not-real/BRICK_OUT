class Paddle {
    width = 35;
    height = 10;
    color = '#955b108a';
    x; 
    y;

    init() {
        this.x = (_canvas.width/2) - (this.width/2); 
        this.y = _canvas.height - 30;
        this.width = 35;
    }
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    move(x) {
        this.x = x - (this.width/2);
        if ((this.x + this.width) > _canvas.width) {
            this.x = _canvas.width;
        }
        if (this.x < 0) {
            this.x = 0;
        }
    }


}
class Brick {
    width = 35;
    height = 15;
    color = '#955b108a';
    x; 
    y;

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }

}

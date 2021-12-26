let COLORS = ['yellow', 'orange', 'red'];

class Brick {
    width = 33;
    height = 16;
    durability;
    exp;
    color;
    path;
    x; 
    y;

    init(x, y, box) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width-2, this.height-2);

        switch(box) {
            case 'j':
                this.durability = 0;
                this.exp = 1;
                break;
            case 'o':
                this.durability = 1;
                this.exp = 2;
                break;
            case 'r':
                this.durability = 2;
                this.exp = 3;
                break;
        }
    }

    draw() {
        ctx.strokeStyle = COLORS[this.durability];
        ctx.stroke(this.path);
    }

}

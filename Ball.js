class Ball {
    radius = 6;
    x = 100; 
    y = 120; 
    vx = 1;
    vy = -1;
    color = '#955b108a';

    init() {
        this.x = paddle.x + (paddle.width); 
        this.y = paddle.y - (paddle.height/2);
        this.vx = 1;
        this.vy = -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        let nextX = this.x;
        let nextY = this.y;

        //si la balle touche un bord, inverse les vitesses 
        if((nextX + this.radius) > _canvas.width || (nextX - this.radius) < 0) {
            this.vx = -this.vx;
        }
        if(nextY - this.radius < 0) {
            this.vy = -this.vy;
        }
        //si la balle passe a hauteur du paddle
        else if((nextY + this.radius) > paddle.y) {
            //si la balle touche le bord bas
            if(nextY + this.radius > _canvas.height) {
                App.stop();
                return
                //DEV
                // this.vy = -this.vy;
            }
            else {
                //si la balle touche le paddle, inverse les vitesses
                if((nextX > paddle.x) && (nextX < (paddle.x + paddle.width))) {
                    this.vy = -this.vy;
                }
            }
        }

        this.x += this.vx;
        this.y += this.vy;
    }
}


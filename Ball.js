class Ball {
    radius = 6;
    x = 100; 
    y = 120; 
    vx = 1;
    vy = -1;
    color = '#955b108a';
    exp;

    init() {
        this.x = paddle.x + (paddle.width); 
        this.y = paddle.y - (paddle.height/2);
        this.vx = 1;
        this.vy = -1;
        this.exp = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    revert(axe) {
        this[axe] = -this[axe];
    }

    move() {
        let nextX = this.x;
        let nextY = this.y;

        //si la balle touche un bord, inverse les vitesses 
        if((nextX + this.radius) > _canvas.width || (nextX - this.radius) < 0) {
            this.revert('vx');
        }
        if(nextY - this.radius < 0) {
            this.revert('vy');
        }
        
        //si la balle passe a hauteur du paddle
        else if((nextY + this.radius) > paddle.y) {
            //si la balle touche le bord bas
            if(nextY + this.radius > _canvas.height) {
                // DEV
                if(devIsActive) {
                    this.revert('vy');
                }
                else {
                    App.stop();
                    return
                }
            }
            else {
                this.checkIfHit(paddle.path);
            }
        }

        this.x += this.vx;
        this.y += this.vy;
    }

    checkIfHit(path) {
        //Points de la balle
        let top = this.y - this.radius;
        let bottom = this.y + this.radius;
        let left = this.x - this.radius;
        let right = this.x + this.radius;

        let isHitting = false;

        if(ctx.isPointInPath(path, this.x, bottom) || ctx.isPointInPath(path, this.x, top)) {
            this.revert('vy');
            isHitting = true;
        }
        else if(ctx.isPointInPath(path, left, this.y) || ctx.isPointInPath(path, right, this.y)) {
            this.revert('vx');
            isHitting = true;
        }
        else {
            let tiers = ball.radius/3 -7;
            if(
                ctx.isPointInPath(path, left-tiers, top-tiers) ||
                ctx.isPointInPath(path, left-tiers, bottom-tiers) || 
                ctx.isPointInPath(path, right-tiers, top-tiers) || 
                ctx.isPointInPath(path, right-tiers, bottom-tiers) 
            ) {
                this.revert('vy');
                this.revert('vx');
                isHitting = true;
            }
        }

        return isHitting;
    }

    upExp(nbr) {
        this.exp += nbr;

        if(this.exp%10 == 0) {
            this.vx = this.vx < 0 ? this.vx + (-0.2) : this.vx +0.2;
            this.vy = this.vy < 0 ? this.vy + (-0.2) : this.vy +0.2;
        }
        _playerXp. textContent = 'exp: ' + this.exp;
    }
}


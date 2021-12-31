const DROP_WIDTH = 10;
const DROP_HEIGHT = 5;
const DROP_BONUS = [
    [
        {name: 'speed+', color1: 'yellow', color2: 'green'},
        {name: 'paddle+', color1: 'yellow', color2: 'green'},
        {name: 'meteor', color1: 'yellow', color2: 'green'},
        //pour triple je vais devoir revoir la structure, je doit pouvoir executer les fonctions de verifications sur toutes les balles
        // {name: 'triple', color1: 'yellow', color2: 'green'},
        {name: 'speed-', color1: 'red', color2: 'orange'},
        {name: 'paddle-', color1: 'red', color2: 'orange'},
    ]
];

class Drop {
    lvl;
    x;
    y;
    path;
    bonus;

    constructor(lvl, x, y) {
        this.lvl = lvl;
        this.bonus = this.getAleatoryBonus();

        this.initPath(x, y);
    }

    getAleatoryBonus() {
        let rand = Math.floor(Math.random()*DROP_BONUS[0].length);
        return DROP_BONUS[0][rand];
    }

    initPath(x, y) {
        this.x = x;
        this.y = y;
        this.path = new Path2D();
        this.path.rect(this.x, this.y, DROP_WIDTH, DROP_HEIGHT);
    }

    draw() {
        ctx.strokeStyle = this.bonus.color1;
        ctx.strokeStyle = '10px';
        ctx.stroke(this.path);
        ctx.fillStyle = this.bonus.color2;
        ctx.fillText(this.bonus.name, this.x - 5, this.y - 5)
        ctx.fill(this.path);
    }

    move() {
        let y = this.y + 1;

        if((y) + DROP_HEIGHT > paddle.y) {
            if((y) + DROP_HEIGHT > _canvas.height) {
                //destroyed by ground
                return true;
            }
            else {
                if(this.x > paddle.x && this.x < (paddle.x + paddle.width)) {
                    //catched by paddle
                    this.applyBonus();
                    return true;
                }
            }
        }
        
        this.initPath(this.x, y);
        return false;
    }

    applyBonus() {
        let bonus = this.bonus;
        console.log(bonus.name);

        switch (bonus.name) {

            case 'paddle+': 
                paddle.width += 4;
                break;

            case 'paddle-': 
                if(paddle.width > 14) {
                    paddle.width -= 4;
                }
                break;

            case 'speed-': 
                if(ball.vx > 0.05) {
                    ball.vx -= 0.01;
                    ball.vy -= 0.01;
                }
                break; 

            case 'speed+': 
                ball.vx += 0.01;
                ball.vy += 0.01;
                break;

            case 'meteor': 
                ball.activeMeteorMode();
                break;
            
            // case 'triple':
            //     console.log(ball.x, ball.y)
            //     break;
        }
    }
}
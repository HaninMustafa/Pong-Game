// const size = 500;
export default class Ball {
    constructor(height, width, boardHeight, boardWidth) {
        this.width = width
        this.height = height
        this.reset()
            // this.size = size;
        this.radius = 5;

    }
    bounce() {
        if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
            this.vy *= -1
        }

    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    move() {
        this.x += this.vx; // this rendering keeps the ball moving!
        this.y += this.vy;

    }
    render(context, player1, player2) {
        this.bounce()
        this.move()
        this.goal()
        this.draw(context);
        this.paddleCollision(player1, player2);

        // const hitLeft = this.x >= this.width;
        // const hitRight = this.x + this.size <= 0;
        // const hitTop = this.y + this.size <= 0;
        // const hitBottom = this.y >= this.height;
    }
    paddleCollision(player1, player2) {
        if (this.vx > 0) {

            const inRightEnd = this.x+8 >= player2.x;

            if (inRightEnd) {
                if (this.y >= player2.y + this.radius && this.y <= (player2.y + player2.height)) {
                    this.vx *= -1;
                }
            }

        } else {
            const inLeftEnd = this.x <= player1.x + player1.width+8;

            if (inLeftEnd) {
                if (this.y >= player1.y - this.radius && this.y <= (player1.y + player1.height)) {
                    this.vx *= -1;
                }
            }
        }

    }

    reset() {
        this.x = this.width / 2;
        this.y = this.height / 2;
        this.vy = Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = (7 - Math.abs(this.vy)); // x direction

    }
    goal() {
        if (this.x <= 0 + this.radius) {
            this.reset();
        }
        if (this.x >= 300 - this.radius) {
            this.reset();
            this.vx *= -1;
        }
    }
}

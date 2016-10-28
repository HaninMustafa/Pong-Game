export default class ScoreBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.score = 0;
    }
    draw(ctx) {
        ctx.font = "30px Helvetica";
        ctx.fillText(this.score, this.x, this.y);
    }
    render(context) {
        this.draw(context);
    }
}

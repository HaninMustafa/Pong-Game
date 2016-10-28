import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import {
    player1Key,
    player2Key
} from './keys';
import ScoreBoard from './ScoreBoard'
// import Ball from './Ball';

export default class Game {
    constructor() {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';

        this.board = new Board(this.height, this.width);
        this.player1 = new Paddle(this.height, 5, 'white', player1Key)
        this.player2 = new Paddle(this.height, this.width - 10, 'white', player2Key)
        this.ball = new Ball(this.height, this.width);
        this.leftScore = new ScoreBoard(this.width, 50)
        this.rightScore = new ScoreBoard(this.width + 100, 50)

    }
    drawLine() {
        this.context.fillStyle = "white";
        this.context.setLineDash([10, 10]);
        this.context.beginPath();
        this.context.moveTo(this.width / 2, 0);
        this.context.lineTo(this.width / 2, this.height);
        this.context.strokeStyle = "white";
        this.context.stroke();
    }
    drawBoard() {
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.width, this.height)
        this.drawLine()
    }
    render() {
        this.drawBoard()
        this.board.render(this.context)
        this.player1.render(this.context);
        this.player2.render(this.context);
        this.ball.render(this.context, this.player1, this.player2);
        this.leftScore.render(this.context);
        this.rightScore.render(this.context);
    }
}

export default class Paddle {
    constructor(boardHeight, x, color, keys) {
        this.width = 5;
        this.height = 50;
        this.color = color;
        this.x = x;
        this.boardHeight = boardHeight;
        this.y = (boardHeight / 2) - (this.height / 2);
        this.keys = keys;
        this.speed = 5;
        document.addEventListener('keydown', (event) => this.keyListner(event));
        console.log(keys);
    }
    wallBounce() {

    }
    keyListner(event) {
        switch (event.keyCode) {
            case this.keys.up:
                this.moveUp();
                break;
            case this.keys.down:
                this.moveDown();
                break;
            default:
                return;
        }
    }

    moveUp() {
        if (this.y - this.speed >= 0) {
            this.y -= this.speed;
            console.log('up');
        }
    }
    moveDown() {
        if (this.y + this.height + this.speed <= this.boardHeight) {
            this.y += this.speed;
            console.log('down')
        }
    }

    render(context) { // What is ctx? Where does it come from?
        context.fillStyle = this.color;
        context.fillRect(
            this.x, this.y,
            this.width, this.height
        );
    }
}

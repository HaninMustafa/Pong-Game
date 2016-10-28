export default class Board {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    drawLine(context) {
        context.setLineDash([10, 10]);
        context.beginPath();
        context.moveTo(this.width / 2, 0);
        context.lineTo(this.width / 2, this.height);
        context.strokeStyle = "white";
        context.stroke();
    }
    render(context) {
        context.clearRect(0, 0, this.width, this.height);
        this.drawLine(context);
    }
}

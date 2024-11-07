// export default class Player {
class Player {
    constructor () {
        this.position = {
            x: 100,
            y: 100
        }
        this.looklike = {
            width: 100,
            height: 100,
            color: "red"
        }
        this.sides = {
            bottom: this.position.y + this.looklike.height
        }
    }

    draw() {
        c.fillStyle = this.looklike.color
        c.fillRect(this.position.x, this.position.y, this.looklike.width, this.looklike.height)
    }
    
    update() {
        if(this.sides.bottom < canvas.height) {
            this.position.y++
            this.sides.bottom = this.position.y + this.looklike.height
        }
    }
}
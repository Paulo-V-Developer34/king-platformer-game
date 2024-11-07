const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//config do canvas
canvas.width = 64 * 16 //considerando que nosso jogo será baseado em blocos 64x64 podemos considerar que podemos colocar 16 blocos de largura
canvas.height = 64 * 9

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

const player = new Player()

function animate() {
    window.requestAnimationFrame(animate)
    console.log("go")
    c.fillStyle = 'white' //esses comandos irão criar algum elemento no canvas
    c.fillRect(0, 0, canvas.width, canvas.height) //posição do elemento

    player.draw()
    player.update()
}

animate()
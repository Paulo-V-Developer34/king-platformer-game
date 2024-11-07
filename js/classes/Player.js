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
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw() {
        c.fillStyle = this.looklike.color
        c.fillRect(this.position.x, this.position.y, this.looklike.width, this.looklike.height)
    }
    
    update() {
        this.position.x += this.velocity.x //alterar a posição x
        this.position.y += this.velocity.y //ficou ocorrendo um erro porque eu estava colocando this.velocity ao invés de especificar o y, por isso typescript é melhor ;-;, só não estou utilizando-o porque não quero ter que ficar criando interfaces
        this.sides.bottom = this.position.y + this.looklike.height//é prefirível atualizar esse valor independentemente do aumento da velocidade y pois ela pode mudar com a x também
        
        if(this.sides.bottom + this.velocity.y < canvas.height) {//temos que considerar a velocity também para que o cubo não fique bugado e atravesse objetos
            this.velocity.y++
        } else {
            this.velocity.y = 0//redefinindo a velocidade
        }
    }
}
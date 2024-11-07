// import { Player } from "./js/classes/Player" //não precisamos importar o código pois ele está sendo carregado pelo index.html

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//config do canvas
canvas.width = 64 * 16 //considerando que nosso jogo será baseado em blocos 64x64 podemos considerar que podemos colocar 16 blocos de largura
canvas.height = 64 * 9

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
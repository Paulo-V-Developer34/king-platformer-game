const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//config do canvas
canvas.width = 64 * 16 //considerando que nosso jogo será baseado em blocos 64x64 podemos considerar que podemos colocar 16 blocos de largura
canvas.height = 64 * 9

//config do personagem
let y = 100
const pheight = 100 //100 é a altura do personagem
let pbotton = y + pheight
function animate() {
    window.requestAnimationFrame(animate)
    console.log("go")
    c.fillStyle = 'white' //esses comandos irão criar algum elemento no canvas
    c.fillRect(0, 0, canvas.width, canvas.height) //posição do elemento

    c.fillStyle = 'red'
    c.fillRect(100, y, 100, pheight)

    if(pbotton < canvas.height) {
        y++
        pbotton = y + pheight //antes um erro estava acontecendo, pois eu não estava atualizando esse valor, porque achei que isso seria feito altomaticamente, quando na verdade não é
    }
}

animate()
// import { Player } from "./js/classes/Player" //não precisamos importar o código pois ele está sendo carregado pelo index.html

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//config do canvas
canvas.width = 64 * 16 //considerando que nosso jogo será baseado em blocos 64x64 podemos considerar que podemos colocar 16 blocos de largura
canvas.height = 64 * 9

const player = new Player()

//teclas que o usuário pode pressionar
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate)
    console.log("go")
    c.fillStyle = 'white' //esses comandos irão criar algum elemento no canvas
    c.fillRect(0, 0, canvas.width, canvas.height) //posição do elemento

    //vai verificar a tecla pressionada
    if(keys.d.pressed){
        player.velocity.x = 4
    } else if(keys.a.pressed) {
        player.velocity.x = -4
    } else {
        player.velocity.x = 0
    }

    //desenhando o player
    player.draw()
    player.update()
}

animate()

window.addEventListener('keydown', (event)=>{
    switch (event.key) {
        case 'w':
            if(player.velocity.y === 0) {
                player.velocity.y = -20
            }    
            break;
        case 'd':
            keys.d.pressed = true    
            break;
        case 'a':
            keys.a.pressed = true 
            break;
    }
})

//caso a tecla não esteja pressionada
window.addEventListener('keyup', (event)=>{
    switch (event.key) {
        case 'd':
            keys.d.pressed = false    
            break;
        case 'a':
            keys.a.pressed = false
            break;
    }
})
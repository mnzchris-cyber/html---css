///==============================Carrossel auto==============================
const carrossel = document.querySelector(".carrossel__hero")
const fotos = document.querySelectorAll(".fundo--hero")

let imagemAtual = 0

const passar = () => {
    imagemAtual ++
    if (imagemAtual >= fotos.length) {
        imagemAtual = 0
    }
    mover()
}

const mover = () => {
    const largura = imagemAtual * 100
    carrossel.style.transform = `translateX(-${largura}%)`
}
setInterval(passar, 2500);

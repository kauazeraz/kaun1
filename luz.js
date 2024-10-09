let acionar = document.getElementById('body')
// let acionar = document.getElementById('container') // muda a cor só de dentro do container
let res = document.getElementById('resultado')
let img = document.getElementById('imagem')

function acender() {
    acionar.style.background = "white"
    img.src = "LI/download.jpg"
    let resultado = document.getElementById('texto').value
    document.getElementById('resultado').value = resultado
    res.style.color = "red" // muda a cor da fonte do input resultado  
    res.style.borderColor = "red" // mexe na borda do segundo input
    res.style.fontFamily = "comic"
}

function apagar() {
    document.getElementById('resultado').value = null
    document.getElementById('texto').value = null
    img.src = "LI/images.jpg"
    acionar.style.background = "black"; // Muda a cor do fundo da página
    res.style.borderColor = "rgb(20, 20, 110)"  // Muda a cor da borda do resultado 
}
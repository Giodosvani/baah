var nao = document.querySelector(".nao")
var sim = document.querySelector(".sim")

var cantada = document.querySelector(".pagina")
var pergunta = document.querySelector(".resposta")

function desaparecer() {
    nao.style.opacity = '0';
    setTimeout(function displaynone() {
        nao.style.display = 'none'; }, 500)
    }


function mostrarpagina() {
    cantada.style.display = 'flex'
    pergunta.style.display = 'none'
}
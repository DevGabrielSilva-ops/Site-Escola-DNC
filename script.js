var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireita =  window.document.getElementById("seta-direita")
var setaEsquerda =  window.document.getElementById("seta-esquerda")

function RolarParaDireira(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style ="display:flex; margin-top:55px"
    setaDireita.style = "Display:none"
} 

function RolarParaEsquerda() {
    Leonardo.style = "display: Flex"
    Bruna.style = "display: none"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display: flex; margin-top:55px"
}




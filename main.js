const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")

for(let i =0;i<botoes.length;i++){
    console.log(botoes[i])
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length; j++){
       botoes[j].classList.remove("ativo")
       textos[j].classList.remove("ativo")
     } 
        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
    }
}

const contadores = document.querySelectorAll('.contador') 
const tempoObjetivo1 = new Date("2024-10-05T00:00:00"); 
const tempoObjetivo2 = new Date("2024-10-05T00:00:00");
const tempoObjetivo3 = new Date("2024-10-05T00:00:00");
const tempoObjetivo4 = new Date("2024-10-05T00:00:00");
let tempoatual = new Date()

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

contadores[0].textContent = ((tempoObjetivo - tempoatual)/1000)/60/60/24
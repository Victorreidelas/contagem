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
const tempoObjetivo = new Date("2024-10-06T00:00:00"); 
let tempoatual = new Date()

contadores[0].textContent = calculaTempo(tempoObjetivo1) 

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoatual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    
    return dias;
}
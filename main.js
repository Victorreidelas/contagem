const botoes = document.querySelectorAll(".botao")

for(let i =0;i<botoes.length;i++){
    console.log(botoes[i])
    botoes[i].function(){
        botoes[i].classList.add('ativo');
    } 
        

}
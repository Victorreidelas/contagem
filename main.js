const botoes = document.querySelectorAll(".botao")

for(let i =0;i<botoes.length;i++){
    console.log(botoes[i])
    botoes[i].onclick = function(){
        for(letj=0;j<botoes.length;j++){
       botoes[j].classList.remove("ativo")
    } 
        botoes[i].classList.add("ativo")

}
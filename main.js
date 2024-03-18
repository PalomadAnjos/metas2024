const botoes=document.querySelectorAll(".botao");
const texto = Document.querySelectorAll(".aba-conteuo");

for(let=0;i <botoes.length;++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
}
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo = new Date("2024-07-04T00:00:00);
contadores[0].textContent = tempoObjetivo1;



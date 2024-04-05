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
let tempoAtual = new Date ();
contadores[0].textContent = tempoObjetivo1;

function calculaTempo (tempoObjetivo){
    let tempoAtual = new Date () ;
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = math.floor(tempoFinal/1000);
    let minutos = math.floor(segunos/60);
    let horas = math.floor(minutos/60);
    let dias = math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}



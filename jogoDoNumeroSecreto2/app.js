let listaDosNumerosDaSorte = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

mensagemInicial();

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function mensagemInicial(){
    exibirNaTela("h1","Jodo do numero secreto");
    exibirNaTela("p","Digite um numero de 1 a 10");
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        let verificaTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        exibirNaTela("h1", "PARABENS VOCÊ ACERTOU!");
        let mensagem = `Você acertou com ${tentativas} ${verificaTentativa}`;
        exibirNaTela("p", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute < numeroSecreto){
            exibirNaTela("p", "O número secreto é maior");
        } else{
            exibirNaTela("p", "O numero secreto é menor");
        }
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDosNumerosDaSorte.length;
    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDosNumerosDaSorte = [];
    }
    if(listaDosNumerosDaSorte.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else{
        listaDosNumerosDaSorte.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disebled", true);
}

console.log(numeroSecreto);
alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 3;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//enquanto chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt("Escolha um numero entre 1 e 10");
    //se numero secreto for igual a chute
    if(numeroSecreto == chute){
        alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        } else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
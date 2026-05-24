alert('boas vindas ao jogo do numero secreto!!!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute){
        //alert(`Isso ai vc descobriu o numero secreto ${numeroSecreto}`);
        break;
    } else{
        if (numeroSecreto > chute){
            alert(`NS é maior q o chute de ${chute}`);  
        } else{
            alert(`NS é menor q o chute de ${chute}`);     
        }
        tentativas++;
    }

    let palavraTentativa = tentativas > 1 ? 'tentativas' : tentativa;
    alert(`Isso ai vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
}

var numeroSecreto = parseInt(Math.random() * 1000) + 1;
var tentativas= 1

while (chute != numeroSecreto) {
  var chute = prompt("Vamos ao jogo da Advinhação? Digite um número entre 1 e 1000");

  if (chute == numeroSecreto) {
    alert("VOCÊ ACERTOU!!! Parabéns")
   } 
  else if (chute > numeroSecreto){
    alert("Erroou... O número secreto é menor que " + chute + ", essa foi sua tentativa nº " + tentativas)
  }
  else if (chute < numeroSecreto){
    alert("Errou... O número secreto é maior que " + chute + ", essa foi sua tentativa nº " + tentativas)
  }
  tentativas = tentativas + 1
  if (tentativas == 10) {
    alert("Suas chances acabaram, você perdeu!! o número certo era " + numeroSecreto)
    break
  }
}
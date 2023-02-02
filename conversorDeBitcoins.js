//Desafio solicitação do nome

var nome = prompt("Olá, qual seu nome?");

var valorEmReal = prompt(
  nome + " , qual valor em real você gostaria de converter em Bitcoin?"
);

var cotacaoDoBitcoin = 116500.71;
var valorEmBitcoin = valorEmReal * cotacaoDoBitcoin;

valorEmBitcoin = valorEmBitcoin.toFixed(2);

alert("Esse é o resultado da sua conversão R$" + valorEmBitcoin);


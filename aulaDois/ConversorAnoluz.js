//Desafio ano-luz em metros

var nome = prompt("Olá, qual seu nome?");

var distanciaEmMetros = prompt(
  nome + " , qual valor em ano-luz você gostaria de converter em metros?"
);

var anoLuzEmMetros = 9.461e15;
var valorEmMetros = distanciaEmMetros * anoLuzEmMetros;

valorEmMetros = valorEmMetros.toFixed(2);

alert(nome + " Esse é o resultado da sua conversão " + valorEmMetros);
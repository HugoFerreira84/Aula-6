//1
let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");

if (numero1 > numero2) {
  console.log("O maior número é: " + numero1);
} else if (numero2 > numero1) {
  console.log("O maior número é: " + numero2);
} else {
  console.log("Os números são iguais!");
}
//=====
//2
let valor = prompt("Digite um valor: ");

if (valor > 0) {
  console.log("O valor é positivo");
} else if (valor < 0) {
  console.log("O valor é negativo");
} else {
  console.log("O valor é zero");
}
//3
let letra = prompt("Digite uma letra: ").toLowerCase();

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("A letra é uma vogal");
} else if (letra >= "a" && letra <= "z") {
  console.log("A letra é uma consoante");
} else {
  console.log("O caractere digitado não é uma letra");
}

//4

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;

if (media === 10) {
  console.log("Aprovado com Distinção");
} else if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

//5
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

let maior = num1;

if (num2 > maior) {
  maior = num2;
}

if (num3 > maior) {
  maior = num3;
}

console.log("O maior número é: " + maior);

//6

let preco1 = parseFloat(prompt("Digite o preço do primeiro produto: "));
let preco2 = parseFloat(prompt("Digite o preço do segundo produto: "));
let preco3 = parseFloat(prompt("Digite o preço do terceiro produto: "));

let maisBarato = preco1;
let nomeProduto = "Produto 1";

if (preco2 < maisBarato) {
  maisBarato = preco2;
  nomeProduto = "Produto 2";
}

if (preco3 < maisBarato) {
  maisBarato = preco3;
  nomeProduto = "Produto 3";
}

console.log("O produto mais barato é o " + nomeProduto + " e custa R$ " + maisBarato.toFixed(2));

//7

let turno = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno: ");

switch (turno) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
  default:
    console.log("Valor Inválido!");
    break;
}

//8

let nota = parseFloat(prompt("Digite a nota do aluno: "));

let notaConvertida;

switch (true) {
  case nota >= 90:
    notaConvertida = "A";
    break;
  case nota >= 80:
    notaConvertida = "B";
    break;
  case nota >= 70:
    notaConvertida = "C";
    break;
  case nota >= 60:
    notaConvertida = "D";
    break;
  default:
    notaConvertida = "F";
    break;
}

console.log(`A nota ${nota} equivale a ${notaConvertida} no sistema de notas em caracteres.`);

//9

let numero = parseInt(prompt("Digite um número de 1 a 7: "));

let dia;

switch (numero) {
  case 1:
    dia = "Domingo";
    break;
  case 2:
    dia = "Segunda-feira";
    break;
  case 3:
    dia = "Terça-feira";
    break;
  case 4:
    dia = "Quarta-feira";
    break;
  case 5:
    dia = "Quinta-feira";
    break;
  case 6:
    dia = "Sexta-feira";
    break;
  case 7:
    dia = "Sábado";
    break;
  default:
    dia = "Valor inválido";
    break;
}

console.log(dia);



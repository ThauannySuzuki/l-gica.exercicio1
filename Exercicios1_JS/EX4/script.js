/* 4) Faça um programa que receba três notas de um aluno (cada nota de 0 a 10) e calcule a média ponderada considerando pesos 2, 3 e 5 para as notas, respectivamente. */

let nota1 = parseFloat(prompt("Digite o valor da primeira nota (peso2): "))
let nota2 = parseFloat(prompt("Digite o valor da segunda nota (peso3): "))
let nota3 = parseFloat(prompt("Digite o valor da terceira nota (peso5): "))

let media = ((2*nota1) + (3*nota2) + (5*nota3)) / 10

document.write("A média ponderada do aluno foi: " + media)



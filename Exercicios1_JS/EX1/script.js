/* 1) Faça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles. */

let n1 = parseInt(prompt("Digite um número: "))
let n2 = parseInt(prompt("Digite outro número: "))
let soma = n1+n2
let multi = n1*n2
let div = n1/n2

document.write("O valor da soma dos números é de: " + soma + "<br />")
document.write("O valor da Multiplicação dos números é de: " + multi + "<br />" )
document.write("O valor da divisão dos números é de: " + div + "<br />")
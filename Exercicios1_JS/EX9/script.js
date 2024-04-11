/* 9) Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses. */

let valor = parseFloat(prompt("Digite o valor depositado: "))
let valor2 = parseFloat(prompt("Digite o valor do juros: "))
let juros = valor2/10
let total = valor * juros * 12

document.write("O valor total após 12 meses sera de: " + total)
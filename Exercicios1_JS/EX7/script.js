/* 7) Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base. */

let base = parseFloat(prompt("Digite o seu sálario base: "))
let liq = ((base * 5) /100) + base 

document.write("O valor líquido do sálario é: " + liq)
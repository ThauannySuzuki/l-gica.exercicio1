/* 11- Escrever um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.  */ 

let nome = prompt("Digite seu nome: ")
let salario = prompt("Digite seu salário fixo: ")
let vendas = prompt("Digite o total de vendas em dinheiro: ")
let comissao =  ((15/100) * vendas )

document.write("Nome:" + nome + "<br />")
document.write("Salário fixo: " + salario +"<br />")
document.write("A comissao recebida em dinheiro é: " + comissao +"<br />")

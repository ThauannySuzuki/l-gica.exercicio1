/* 19- Elaborar um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.  */

let dolar = parseFloat(prompt("Digite o valor em dólar: "))
let cotacao = parseFloat(prompt("Digite a cotação do dolar: "))
let real = dolar * cotacao

document.write("A conversão de dolar para reais é: "+ real + " reais")
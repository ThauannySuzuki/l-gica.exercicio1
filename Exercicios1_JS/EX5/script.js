/* 5) Escreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades. */

let preco = parseFloat(prompt("Qual o valor do produto?: "))
let quant = parseFloat(prompt("Qual a quantidade do produto?: "))

let valor = preco*quant
let desc = 10/100 * valor 

if(quant>10){
    document.write("O valor total foi de: " + desc)
}
else{
    document.write("O valor total foi de:" + valor)
}


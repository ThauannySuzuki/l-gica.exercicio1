/*  23- Faça um programa que leia 20 números e, ao final, escreva quantos estão entre 0 e 100, quantos estão entre 101 e 200 e quantos são maiores de 200. */

let contadora = 1
let quantidade = 0
let quantidade2 = 0
let quantidade3 = 0

while(contadora<=20){
    let numero = parseInt(prompt("Digite um numero: " + contadora))

    if(numero>=0 && numero<=100){
    quantidade ++ 
    contadora++
    }
    else if(numero>=101 && numero<=200){
    quantidade2 ++
    contadora++
    }
    else if (numero>200){
    quantidade3 ++
    contadora++
    }
}
 document.write("A quantidade de numeros entre 0 e 100: " + quantidade + "<br />")
 document.write("A quantidade de numeros entre 101 e 200: " + quantidade2 + "<br />")
 document.write("A quantidade de numerios maior que 200 é de: " + quantidade3 + "<br />")
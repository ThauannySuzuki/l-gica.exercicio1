/* 22- Faça um programa que leia 20 números e, ao final, escreva quantos estão entre 0 e 100.  */

let contadora = 1
let quantidade = 0


while(contadora<=20){
    let numero = parseInt(prompt("Digite um numero: " + contadora))

    if(numero>=0 && numero<=100){
    quantidade ++ 
    contadora++
    }
    else{
    contadora++}
}
 document.write("A quantidade de numeros entre 0 e 100: " + quantidade)
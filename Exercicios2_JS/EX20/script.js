/* 20- Escreva um programa que leia 20 números do usuário e exiba quantos números são maiores do que 8.  */

let contadora = 1 
let quantidade = 0

while(contadora<=20){
    let idade = parseInt(prompt("Digite a idade da pessoa: " + contadora))

    if(idade>=8){
    quantidade ++ 
    contadora++
    }
    else{
    contadora++}
}
 document.write("A quantidade de pessoas maior de idade é: " + quantidade)
/* 17- Leia a idade de 20 pessoas e exiba quantas pessoas são maiores de idade.  */

let contadora = 1 
let quantidade = 0

while(contadora<=20){
    let idade = parseInt(prompt("Digite a idade da pessoa: " + contadora))

    if(idade>=18){
    quantidade ++ 
    contadora++
    }
    else{
    contadora++}
}
 document.write("A quantidade de pessoas maior de idade é: " + quantidade)

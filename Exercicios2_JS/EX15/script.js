/* 15- Leia a idade de 20 pessoas e exiba a soma das idades.  */

let contadora = 1 

let armazena = 0

while(contadora<=20){
    let idade = parseInt(prompt("Digite a idade da pessoa: " + contadora))
    armazena += idade
    contadora++
}

document.write("A soma das idades é de: " + armazena)
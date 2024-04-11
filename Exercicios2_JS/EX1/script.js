/* 1-Criar um programa em Java, que informe a quantidade total de calorias de uma refeição a partir do usuário que deverá informar o prato, a sobremesa e a bebida (veja a tabela a seguir).(img word)
Sugestão: enumere cada opção de prato, sobremesa e bebida. Ou seja: Prato: 1 - vegetariano, 2 – Peixe, 3 – Frango, 4 – Carne; Sobremesa: 1 – Abacaxi, 2 – Sorvete diet, 3 – Mouse diet, 4 – Mouse chocolate; Bebida: 1 – Chá, 2 - Suco de laranja, 3 – Suco de melão, 4 – Refrigerante diet. */

let prato = prompt("Digite o nome do prato que deseja (OPÇÕES: Vegetariano, Peixe, Frango e Carne): ")
switch(prato){
case "Vegetariano" : 180
break
case "Peixe" : 230
break
case "Frango" : 250
break
case "Carne" : 350
break
}    
let sobremesa = prompt("Digite o nome do prato que deseja (OPÇÕES: Abacaxi, Sorvete, Mouse e Torta): ")

switch(sobremesa){
    case "Abacaxi" : 75
    break
    case "Sorvete" : 110
    break
    case "Mouse" : 170
    break
    case "Torta" : 200
    break
    }    
let bebida = prompt("Digite o nome do prato que deseja (OPÇÕES: Cha, Sucolaranja, Sucolimao e Refrigerante): ")
switch(bebida){
    case "Cha" : 20
    break
    case "Sucolaranja" : 70
    break
    case "Sucolimao" : 100
    break
    case "Refrigerante" : 65
    break
    }    

let total = prato + sobremesa + bebida
document.write("O total de calorias foi: " + total + "Cal")
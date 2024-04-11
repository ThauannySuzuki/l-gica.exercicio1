/* 10- Informar um saldo e imprimir o saldo com reajuste de 1.5%. */

let saldo = prompt("Digite o saldo: ")
let reajuste = (saldo - (1.5/100) * saldo )

document.write("O saldo com o reajuste de 1.5% é de: " + reajuste)
/* 10) Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor. */

let numero = parseInt(prompt("Digite um número: "))

let contadora = 1 

document.write("A tabuada do " + numero )

while(contadora<=10){
   let resultado = numero * contadora
    document.write(numero + "x" + contadora + "=" + resultado + "<br />")
    contadora++
}
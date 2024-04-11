/* 2) Escreva um programa que leia o raio de um círculo e calcule sua área e perímetro. */

let raio = parseFloat(prompt("Digite o valor do raio: "))
let area = 3.14 * (raio*raio)
let peri = (3.14*3.14) * raio

document.write("O valor da área do circulo é de: " + area + "<br />")
document.write("O valor do perímetro do circulo é de: " + peri)
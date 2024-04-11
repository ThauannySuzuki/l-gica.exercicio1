/* 13- Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.  */  

let c = prompt("Digite a temperatura em Celsius: ")
let fahrenheit = (9 * c + 160) / 5

document.write("A temperatura convertida foi de: " + fahrenheit)
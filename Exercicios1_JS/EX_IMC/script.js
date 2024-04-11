let peso = parseFloat(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))
let imc = peso /(altura * altura)

document.write("O valor do seu IMC é de:" + imc + "<br />")

if(imc<17){
    document.write("Muito abaixo do peso")
}
else if(imc>17 && imc<=18.4){
    document.write("abaixo do peso")
}
else if(imc>=18.5 && imc<= 24.9){
    document.write("peso normal")
}
else{
    document.write("Obesidade")
}

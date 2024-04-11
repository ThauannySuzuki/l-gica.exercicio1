/* 5- Crie um programa em JAVA que leia a idade de uma pessoa e informe a sua classe eleitoral: 
• não eleitor (abaixo de 16 anos); 
• eleitor obrigatório (entre a faixa de 18 e menor de 65 anos);
• eleitor facultativo (de 16 até 18 anos e maior de 65 anos, inclusive). */


let idade = prompt("Entre com a idade do eleitor:")
		
if(idade<16) {
     document.write("Essa pessoa não pode votar!")
}
else{
 if(idade<18){
     document.write("voto opcional")
}
else{
 if(idade<70){
	document.write("voto obrigatorio")
}else{
 document.write("voto opcional")
 }
 }
 }  
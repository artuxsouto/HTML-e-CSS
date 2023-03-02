function jogoAdivinha() {
	let valores = [0, 10];
	let numeroSorteado = getRandomInt(valores[0], valores[1]);
	console.log(numeroSorteado);
	let numeroInformado = prompt(`Qual o valor que você deseja chutar? Valores de ${valores[0]} a ${valores[1]}.`);
	let contador = 3;

	if(numeroSorteado == numeroInformado) {
		alert(`Parabéns, você acertou! O número sorteado foi: ${numeroSorteado}.`);
	}

	while(numeroSorteado != numeroInformado && contador != 0) {
		contador--;
		numeroInformado = prompt(`Errado! Tente novamente, você tem mais ${contador} tentativas.`);

		if(numeroSorteado == numeroInformado) {
			contador = 0;
			alert(`Parabéns, você acertou! O número sorteado foi: ${numeroSorteado}.`);
		}

		if(numeroSorteado != numeroInformado && contador == 1) {
			numeroInformado = numeroSorteado;
			alert(`GAME OVER! O número sorteado foi: ${numeroSorteado}.`);
		}
	}
	alert('FIM!');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

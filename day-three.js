function historiaDev() {
	alert('Jogo - Escolha o caminho a seguir:');
	const trilha = ['Front-End', 'React', 'Vue', 'Back-End', 'C#', 'Java'];
	
	let escolha = prompt(`Deseja seguir qual caminho? "${trilha[0]}" ou "${trilha[3]}"`);

	if(escolha === trilha[0]) {
		escolha = prompt(`${trilha[0]}: Deseja aprender? ${trilha[1]} ou ${trilha[2]}`);
	}
	else if(escolha === trilha[3]) {
		escolha = prompt(`${trilha[3]}: Deseja aprender? ${trilha[4]} ou ${trilha[5]}`);
	}
	else {
		alert('Informação inválida, tente novamente.');
	}

	const escolhaCarreira = prompt('Escolha: 1 - Deseja se especialziar na área? ou 2 - Continuar se desenvolvendo para se tornar Fullstack?');

		if (escolhaCarreira == 1) {
			alert('A luta é grande, mas a derrota é certa.');			
		}else if(escolhaCarreira == 2) {
			alert('De onde menos se espera, é que não vem nada mesmo.');
		}
		else{
			alert('A paz nunca foi uma opção.');
		}

		let msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite "ok" em caso positivo.');

	while(msg == 'ok') {
		let novaTecnologia = prompt('Qual?');
		alert(`${novaTecnologia} é legal!`);
		msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite "ok" em caso positivo.');
	}
	alert('FIM');
}

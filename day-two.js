function quizPagina() {
	let contador = 0;
	while (contador == 0) {
		const qualSeuNome = prompt("Qual o seu nome?");
		if (qualSeuNome == '' || qualSeuNome === null) {
			alert('Nome não informado ou inválido, tente novamente.');
			break;
		}
		const qualSuaIdade = prompt("Quantos anos você tem?");
		if (qualSuaIdade == '' || qualSuaIdade === null) {
			alert('Idade não informada ou inválida, tente novamente.');
			break;
		}
		const qualLinguagem = prompt("Qual linguagem de programação você está estudando?");
		if (qualLinguagem == '' || qualLinguagem === null) {
			alert('Linguagem não informada ou inválida, tente novamente.');
			break;
		}
		const msg = `Olá ${qualSeuNome}, você tem ${qualSuaIdade} anos e já está aprendendo ${qualLinguagem}!`;
		alert(msg);
		contador++;
	}
}

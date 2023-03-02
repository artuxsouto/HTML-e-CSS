function listaDeCompras() {
	let frutas = [];
	let laticinios = [];
	let congelados = [];
	let doces = [];
	let higiene = [];
	let categoria = '';
	let novoItem = '';
	let msg = 'sim';

	while(msg != 'não') {
		msg = prompt('Deseja adicionar um item na lista de compras? Digite "sim" ou "não".');
		while(msg != 'sim' && msg != 'não'){
			alert('Opção inválida.');
			msg = prompt('Deseja adicionar um item na lista de compras? Digite "sim" ou "não".');
		}
		if(msg === 'não') {
			break;
		}
		novoItem = prompt('Qual item você deseja inserir?');
		categoria = prompt('Em qual categoria esse item se encaixa? Informe a categoria:"frutas", "laticinios", "doces", "congelados" ou "higiene".');
		if(categoria === 'frutas') {
			frutas.push(novoItem);
		}else if(categoria === 'laticinios') {
			laticinios.push(novoItem);
		}else if(categoria === 'doces') {
			doces.push(novoItem);
		}else if(categoria === 'congelados') {
			congelados.push(novoItem);
		}else if(categoria === 'higiene') {
			higiene.push(novoItem);
		}else {
			alert('Categoria inválida.');
		}
	}
	alert(`Lista de Compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n Higiene: ${higiene}.`);
}

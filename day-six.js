function listaDeComprasMelhorada() {
	let frutas = [];
	let laticinios = [];
	let congelados = [];
	let doces = [];
	let higiene = [];
	let categoria = '';
	let listaDeCategoria = ['frutas', 'laticinios', 'doces', 'congelados', 'higiene'];
	let listaDeArray = [frutas, laticinios, congelados, doces, higiene];
	let itemInformado = '';
	let msg = 'sim';

	while(msg != 'não') {
		msg = prompt('Deseja adicionar um item na lista de compras ou remover? Digite "sim" ou "não".');
		while(msg != 'sim' && msg != 'não'){
			alert('Opção inválida.');
			msg = prompt('Deseja adicionar ou remover um item na lista de compras? Digite "sim" ou "não".');
		}
		if(msg === 'não') {
			break;
		}

		itemInformado = prompt('Qual item você deseja inserir/remover?');
		categoria = prompt('Em qual categoria esse item se encaixa? Informe a categoria:"frutas", "laticinios", "doces", "congelados" ou "higiene".');
		let indiceCategoria = listaDeCategoria.indexOf(categoria);
		let indiceItem = listaDeArray[indiceCategoria].indexOf(itemInformado);

		if(categoria === listaDeCategoria[indiceCategoria]) {

			if(indiceItem == -1) {
				alert(`Adicionando item: ${itemInformado}\nCategoria: ${categoria}`);
				listaDeArray[indiceCategoria].push(itemInformado);
			}
			else if(indiceItem >= 0) {
				alert(`Item removido: ${itemInformado}\nCategoria: ${categoria}`);
				listaDeArray[indiceCategoria].splice(indiceItem, 1);
			}
			else {
				alert('Categoria ou item não encontrado, tente novamente.');
			}
		}
	}
	alert(`** Lista de Compras **\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n Higiene: ${higiene}.`);
}

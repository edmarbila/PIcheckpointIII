/*Importe o arquivo de consertos E faça as seguintes manipulações:
Liste e exiba somente os aparelhos com pronto marcado como true
Liste e exiba somene os aparecelhos com pronto marcado como false*/

//pronto = statusReparo

const consertos = require('./consertos');

var consertados = consertos.filter(somenteConsertados);

listaConsertados();
listaNaoConsertados();
listaAparelhosProntos();

function somenteConsertados(value) {

  return value.statusReparo === true;
}

function somenteNaoConsertados(value) {

  return value.statusReparo === false;

}

function listaConsertados() {

  console.log("\nCelulares Consertados: ");

  consertados.forEach(situacao => {

    console.log('- '+ situacao.marca + ': ' + situacao.modelo);

  });

}

function listaNaoConsertados() {

  var naoConsertados = consertos.filter(somenteNaoConsertados);

  console.log("\nCelulares não Consertados: " ); 

  naoConsertados.forEach(situacao => {

  console.log('- '+ situacao.marca + ': ' + situacao.modelo);

  });

}


function listaAparelhosProntos() {

  console.log('\n Valor a Cobrar dos Celulares Prontos:');

  consertados.forEach((data) => {

    console.log("\n");

    console.log("Celular: " + data.marca + ' ' + data.modelo);

    console.log("itens consertados:");

    let indexItem = 0 ;

    data.itensConsertados.forEach((item) => {

      indexItem++;

      console.log(" - Item "  + ": " +item);

    });

    console.log("# Valor total: " + data.valores.reduce(

      (total, currentElement) => total + currentElement))
  });
}
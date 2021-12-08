/*1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno.*/

// 1- Criado Objeto Aluno não literal com os dados solicitados.

class Aluno {

    nome;
    faltasComputadas;
    notas ;
    
    
    constructor (nome,notas,faltasComputadas) {

        this.nome = nome;
        this.notas = notas;
        this.faltasComputadas = faltasComputadas;
    }

    //calcular media e incrementar faltas

    gerarMedia(){
        
        const soma = this.notas.reduce((a,b) => {}, 0);
        const media = soma / this.notas.length

        return media;
    }

    faltas(){

        this.faltasComputadas ++;

        return this.faltasComputadas;
    }

};

console.log("Aluno: Mc Loving");
console.log("Faltas: 21");
console.log('Notas 6,8,1,0')
console.log("Status: Reprovado");



module.export = Aluno;

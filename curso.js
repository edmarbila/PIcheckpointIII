/*Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).*/

alunosMatriculados = require('./estudantesMatriculados')
aluno = require ('./alunos')

const estudantesMatriculados = require('./estudantesMatriculados')


const curso = { 
    
    nomeDoCurso: "Programação Ferrativa, me ferrei",
    notaCorte: 7,
    limiteFaltas: 20,
    estudantes: estudantesMatriculados,


    /*Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
    chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
    propriedade lista de estudantes do objeto curso.*/
   

    novoAluno: function() {

        const alunoNovos = estudantesMatriculados,

        const estudantes = this.estudantesMatriculados;
        const atualizacao = [];

        estudantes.forEach.push(alunoNovos)
        this.estudantesMatriculados = atualizacao;
        return atualizacao;     
    },

       /* Crie um método para o objeto curso que receba um aluno (como parâmetro) e
       retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
       aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
       faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
       aprovação.*/

       

    aprovacaoAluno(aluno){
            
        const media = aluno.gerarMedia();
        let notaOk = false,

    if (media >= this.notaCorte)
        notaOk = true;
        let faltasOk = false;

    if (notaOk == true && aluno.faltasComputadas < this.numfaltaMaximas){
        faltasOk = true;

    }
    // condição de acressimo de 10% caso não tenha faltas correspondetes (passo 5)
    else if (notaOk && aluno.faltasComputadas == this.numfaltaMaximas){
         var notaAcrescida = ((10 * this.notaCorte) / 100) + this.notaCorte;

    if (media > notaAcrescida)
        faltasOk = true;
    }

    if (notaOk && faltasOk)

    return true;

    else
    
    return false;
        
    },

    /*Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
    array de booleanos com os resultados se os alunos aprovaram ou não.*/
    
    listaStatus: function(aluno) {
        
        estudantes.forEach(function(Aluno) {
        status.push(curso.aprovacaoAluno(Aluno));});
        const estudantes = this.estudantes;
        const status = [];
    }
    

}

export default curso;
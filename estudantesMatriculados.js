/*Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela
lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).*/


const 
aluno1  = new Aluno ("Jubileu S.", [5,4,8,4], 5);

const 
aluno2 = new Aluno ("Claytin B.", [6,8,1,0], 8);

const
aluno3 = new Aluno ("Mc Loving.", [6,8,1,0], 21);

const 
aluno4 = new Aluno ("Junin W.", [8,4,1,5], 20);

const 
aluno5 = new Aluno ("Clodoaldo V.", [10,10,1,10], 21);

const 
estudantesMatriculados = [];

estudantesMatriculados.push(aluno1,aluno2,aluno3,aluno4,aluno5);

export default estudantesMatriculados;

/*Crie um array de objetos consertos que tenha como atributos: aparelho (string),
itens consertados (array de strings), valores (array de números) e pronto (booleano). Deve
ter ao menos 15 itens dentro de consertos salve o arquivo como consertos.js e exporte
este módulo. Módelo de exemplo do array de consertos:*/

//aparelho = modelo
// pronto = statusReparo

const consertos = [ 
    {
         marca: 'Xiaomi',
         modelo: 'redmi note 4',
         itensConsertados: ['tela', 'placa', 'sistema'],

         valores: [150, 500, 50],

         statusReparo: false
    },

    {
         marca: 'Xiaomi',
         modelo: 'redmi mi 5i',
         itensConsertados: ['tela', 'fone',],

         valores: [150, 20,],

         statusReparo: true
    },

    {
         marca: 'Xiaomi',
         modelo: 'redmi mi mix',
         itensConsertados: ['modulo', 'bateria', 'sistema'],
    
         valores: [135, 80, 50],
    
         statusReparo: false
    },

    {
         marca: 'Sansung',
         modelo: 'Galaxy S20 FE',
         itensConsertados: ['tela', 'sistema'],
   
         valores: [300, 50],
   
         statusReparo: true
   },

   {
         marca: 'Sansung',
         modelo: 'Galaxy A10',
         itensConsertados: ['tela', 'limpeza', 'auto-falante'],

         valores: [100, 10, 45],

         statusReparo: false
    },

    {
         marca: 'Sansung',
         modelo: 'S20 plus',
         itensConsertados: ['sensores', 'placa', 'modulo'],

         valores: [80, 200, 70],

         statusReparo: true
    },

    {
         marca: 'Apple',
         modelo: 'Iphone 8',
         itensConsertados: ['tela', 'placa'],
    
         valores: [700, 999],
    
         statusReparo: true
    },

    {
         marca: 'Apple',
         modelo: 'Iphone 10',
         itensConsertados: [ 'atualização', 'sistema'],
   
         valores: [80, 50],
   
         statusReparo: false
    },
    
    {
         marca: 'Apple',
         modelo: 'Iphone 11 Max',
         itensConsertados: ['tela', 'placa'],

         valores: [999, 999],

         statusReparo: false
    },

    {
         marca: 'Realme',
         modelo: 'Narzo 30',
         itensConsertados: ['tela', 'placa', 'auto-falante'],

         valores: [180, 350, 89],

         statusReparo: true
    },

    {
         marca: 'Realme',
         modelo: '8 Pro',
         itensConsertados: ['tela', 'sistema'],
   
         valores: [150, 50],
   
         statusReparo: true
    },

    {
         marca: 'Realme',
         modelo: 'Serie 7',
         itensConsertados: ['tela', 'placa', 'sistema'],
  
         valores: [145, 57, 55],
  
         statusReparo: false
    },

    {
         marca: 'LG',
         modelo: 'k10',
         itensConsertados: ['tela', 'modulo', 'limpeza'],

         valores: [100, 250, 50],

         statusReparo: false
    },

    {
         marca: 'LG',
         modelo: 'k20',
         itensConsertados: ['sensores', 'placa', 'sistema'],

         valores: [55, 200, 20],

         statusReparo: true
    },

    {
         marca: 'LG',
         modelo: 'k20',
         itensConsertados: ['desbloqueio', 'sensores', 'sistema'],

         valores: [150, 80, 35],

         statusReparo: true
    },

    {
         marca: 'Huawei',
         modelo: 'P30 Pro',
         itensConsertados: ['tela', 'placa', 'sistema'],

         valores: [100, 200, 50],

         statusReparo: true
   },

]

module.exports = consertos;

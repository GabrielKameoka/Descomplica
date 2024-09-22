console.log("Método slice");//copia uma parte de um array e retorna como um novo array, e isso não modifica o array original
let pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
let pessoas1 = pessoa.slice(1, 3);//corta da posição 1 "Joana" até um antes da posição 3 "Wallace"
console.log(pessoa);
console.log(pessoas1);

console.log(); 

console.log("Método filter");//Guarda em uma variável o que eu quero
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = num.filter(item => item % 2 == 0);//Guarda apenas os números que são pares dentro da variável resultado
console.log(resultado);

let produtos =
[
    {id: 1, descricao: "SmartPhone", categoria: "Eletrônico"},
    {id: 2, descricao: "XBox series X", categoria: "Eletrônico"},
    {id: 3, descricao: "Cadeira", categoria: "Objeto"},
    {id: 4, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Estante", categoria: "Objeto"},
    {id: 6, descricao: "Monitor gamer", categoria: "Eletrônico"}
]
let Eletronicos = produtos.filter(item => item.categoria == "Eletrônico");//Filtra os itens que são da cateforia "Eletrônico" e guarda na variável Eletronicos
console.log(Eletronicos);

console.log();

console.log("Método forEach");

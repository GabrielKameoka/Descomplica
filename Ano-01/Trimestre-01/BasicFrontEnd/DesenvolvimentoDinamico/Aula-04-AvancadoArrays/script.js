console.log("Método splice");//remove multiplos valores dentro do array
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(1, 3);//(índice, números de elementos) indice = posição do elemento; números de elementos = números de elementos que deseja retirar
console.log(arr);

console.log();

console.log("Método splice")
let nomes = ["Maria", "João", "Lucas", "Pedro"];
let novos = nomes.splice(1, 2, "Luíz", "Ronaldo");//remove o João que está na posição 1 até a posição 2 e coloca o Luiz e Ronaldo no lugar do João e Lucas
console.log(nomes);
console.log(`Nome retirado: ${novos}`);

console.log();

console.log("Método unshift");//adiciona um elemento no início do array
let pais = ["Brasil", "Japão", "Alemanha"];
pais.unshift("Uruguai");
console.log(pais);

console.log();

let nomes1 = ["Guilherme", "Manuel", "Samuel", "Davi", "João"]
nomes1.unshift("Monica");
nomes1.splice(5, 1);
nomes1.splice(2, 1, "Emanuel")
console.log(nomes1);

console.log("Posição do Samuel: " + nomes1.indexOf("Samuel"));
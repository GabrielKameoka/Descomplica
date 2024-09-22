let arr = [7,3,4,1,6]
var arr1 = [1,2,3,4,5,6];
let arr2 = ["São Paulo", "Minas Gerais", "Rio Grande do Sul", "Rio de janeiro"]

console.log("Método reverse");//inverte o array
console.log(arr.reverse());

console.log();

console.log("Método join");//coloca um espaço entre os elementos do array durante a exibição no console
console.log(arr1.join('  '));

console.log();

console.log("Método shift");//retira o primeiro número do array
let retirado = arr1.shift();
console.log(`número retirado: ${retirado}`);
console.log(arr1);

console.log();

console.log("Método indexOf");//pega a posição do número desejado
console.log(`Posição do número 6: ${arr1.indexOf(6)}`);
console.log(`Posição da string "Rio de janeiro": ${arr2.indexOf("Rio de janeiro")}`);

console.log();

console.log("Método push");
arr1.push(10);
console.log(arr1);

console.log()

console.log("Método pop");//remove o último elemento do array
arr1.pop();
console.log(arr1)

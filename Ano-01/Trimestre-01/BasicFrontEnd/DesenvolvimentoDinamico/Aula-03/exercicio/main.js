const numeros = [5, -2, 10, 8, -3];

numeros.sort((a, b) => a - b);
console.log(numeros);

for (i = 0; numeros.shift() < 0; i++)
{
    if ( numeros.shift() < i)
    {
        let retirado = numeros.shift();
    }
}

console.log(numeros);


// console.log("Método shift");//retira o primeiro número do array

// console.log(`número retirado: ${retirado}`);
// console.log(arr1);
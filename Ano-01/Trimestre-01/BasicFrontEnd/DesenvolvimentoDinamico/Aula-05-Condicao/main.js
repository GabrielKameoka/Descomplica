let x = 10;
console.log("Antes da mudança " + x);

if (x > 20)
{
    x = x + 10;
}
else
{
    x = x - 10;
}
console.log("Depois da mudança " + x);

let diaSem = 4;

switch (diaSem) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;
    
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Esse dia da semana não existe");
        
}
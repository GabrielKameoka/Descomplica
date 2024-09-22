let bebida = "chá";
let valorAPagar = 0;

switch (bebida) {
    case "café":
        valorAPagar = 4.00;
        console.log(`bebida: ${bebida}, valor a pagar: ${valorAPagar}`);
        break;

    case "leite":
        valorAPagar = 3.00;
        console.log(`bebida: ${bebida}, valor a pagar: ${valorAPagar}`);
        break;

    case "chá":
        valorAPagar = 5.00;
        console.log(`bebida: ${bebida}, valor a pagar: ${valorAPagar}`);
        break;

    default:
        console.log("a escolha deve ser feita entre café, leite ou chá")
        break;
}
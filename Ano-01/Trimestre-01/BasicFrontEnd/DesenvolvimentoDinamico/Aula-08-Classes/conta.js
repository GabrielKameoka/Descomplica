class conta
{
    constructor(numeroConta, saldo, debito, credito)
    {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcularSaldoAtual()
    {
        return this.saldo - this.debito + this.credito;
    }

    verificarSaldo()
    {
        const saltoAtual = this.calcularSaldoAtual();
        if(saltoAtual >= 0)
        {
            alert("Saldo positivo R$ " + saltoAtual)
        }else
        {
            alert("Salto negativo R$ " + saltoAtual)
        }
    }
}

let numeroConta = prompt("Digite o número da conta do cliente");
let salto = parseFloat(prompt("Digite o saldo do cliente"));
let debito = parseFloat(prompt("Digite o debito do cliente"));
let credito = parseFloat(prompt("Digite o credito do cliente"));

let conta1 = new conta(numeroConta, salto, debito, credito)
conta1.verificarSaldo()
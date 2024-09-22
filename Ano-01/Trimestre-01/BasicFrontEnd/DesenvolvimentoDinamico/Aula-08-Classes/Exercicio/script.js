class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`
    );
  }

  trabalhar() {
    console.log(`Estou trabalhando como ${this.cargo}.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`Estou gerenciando o departamento de ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Estou programando em ${this.linguagem}.`);
  }
}

const gerente = new Gerente("Maurício", 40, "Tech lead", "TI");
const desenvolvedor = new Desenvolvedor("Maria", 28, "Desenvolvedora", "C#");

gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
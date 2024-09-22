class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome} e sou um(a) ${this.cargo}.`);
  }

  trabalhar() {
    console.log("Estou trabalhando...");
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
    super(nome, idade, "Gerente");
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`Estou gerenciando o departamento de ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
    super(nome, idade, "Desenvolvedor");
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`Estou programando em ${this.linguagem}.`);
  }
}

function exibirErro(mensagem) {
  const erroElement = document.getElementById("erro");
  erroElement.textContent = mensagem;
}

function criarFuncionario() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cargo = document.getElementById("cargo").value;
  const departamento = document.getElementById("departamento").value;
  const linguagem = document.getElementById("linguagem").value;

  try {
    if (!nome || !idade || !cargo) {
      throw new Error("Nome, idade e cargo são obrigatórios.");
    }

    let funcionario;
    if (cargo === "Gerente") {
      funcionario = new Gerente(nome, idade, departamento);
    } else if (cargo === "Desenvolvedor") {
      funcionario = new Desenvolvedor(nome, idade, linguagem);
    } else {
      throw new Error("Cargo inválido.");
    }

    funcionario.seApresentar();
    funcionario.trabalhar();
    if (funcionario instanceof Gerente) {
      funcionario.gerenciar();
    } else if (funcionario instanceof Desenvolvedor) {
      funcionario.programar();
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = ""; // Limpa resultados anteriores
  } catch (error) {
    exibirErro(error.message);
  }
}

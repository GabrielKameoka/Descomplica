//as classes são usadas para representar os objetos da vida real
class animal {
    constructor(nome, idade, jaula) 
    {
        this.nome = nome;
        this.idade = idade;
        this.jaula = jaula;    
    }
}

let animal1 = new animal("Jabico", 5, 203)
console.log(animal1);


class Pessoa{
    nome;
    idade;

    falar( nome, idade) {
        this.nome = nome
        this.idade = idade
        console.log("Olá, eu sou " + this.nome)
        console.log("Minha idade é " + this.idade)
    }
}

var pessoa = new Pessoa ()

pessoa.falar("vitor", 18)
console.log(pessoa.nome)
class Aluno {
    nome;
    idade;
    curso;

    falar( nome, idade, curso) {
        this.nome = nome
        this.idade = idade
        this.curso = curso
        console.log("Meu nome é " + this.nome)
        console.log("Tenho " + this.idade + " anos")
        console.log("Estou fazendo curso de " + this.curso)
    }
}

var Aluno1 = new Aluno ()
var Aluno2 = new Aluno ()

Aluno1.falar("vitor", 18, "senai")
Aluno2.falar("joão", 17, "mecanico de manutenção")
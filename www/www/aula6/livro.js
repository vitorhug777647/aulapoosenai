class Livro{
    titulo;
    autor;

    exibirinfo( titulo, autor) {
        titulo = titulo
        autor = autor
        console.log("O titulo do livro é " + titulo)
        console.log("O autor é " + autor)
    }
}

var livro1= new Livro ()
var livro2 = new Livro ()
var livro3 = new Livro ()

livro1.exibirinfo("Super dragon ball","Akira toriyama")
livro2.exibirinfo("One piece","Eiichiro Oda")
livro3.exibirinfo("Tokyo ghoul","Sui ichida")
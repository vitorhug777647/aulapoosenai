class Filme{
    titulo;
    genero;

    exibirinfo( titulo, genero) {
        titulo = titulo
        genero = genero
        console.log("O titulo do filme é " + titulo)
        console.log("O genero é " + genero)
    }
}

var filme1= new Filme ()
var filme2 = new Filme ()
var filme3 = new Filme ()

filme1.exibirinfo("pintolver","comedia")
filme2.exibirinfo("mimamaram","ação")
filme3.exibirinfo("deu a louca","terro")
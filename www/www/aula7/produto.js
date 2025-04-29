class Produto {
    nome;
    preco;
    quantidade;

    exibirDetalhes( nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        console.log("produto " + this.nome)
        console.log("preço " + this.preco)
        console.log("quantidade " + this.quantidade)
    }

calcularvalor(preco, quantidade) {
    this.preco = preco
    this.quantidade = quantidade
    var resultado = this.preco * this.quantidade;
    console.log(" O valor ao todo será: = " + resultado);

     }

} 

var produto = new Produto();

produto.exibirDetalhes("pepsi", "8,00$", 3)

produto.calcularvalor(8, 3)



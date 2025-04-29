class carro {
    marca;
    modelo;
    ano;

    ligar() {
        console.log("o carro está ligado.");
    }
}

//Criando objeto ( instância)
var carro1 = new carro()
var carro2 = new carro()
var carro3 = new carro()

carro1.marca = "lamborghini"
carro2.marca = "chevrolt"
carro3.marca = " toyota"

console.log(carro1.marca)
console.log( carro2.marca)
console.log( carro3.marca)

carro1.modelo = " gallardo"
carro2.modelo = "impala 67"
carro3.modelo = " supra"

console.log(carro1.modelo)
console.log(carro2.modelo)
console.log(carro3.modelo)

carro1.ano = 2012
carro2.ano = 1967
carro3.ano = 1990

console.log(carro1.ano)
console.log(carro2.ano)
console.log(carro3.ano)
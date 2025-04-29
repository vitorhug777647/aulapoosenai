class Calculadora {
    valor1;
    valor2;

    somar( valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 + this.valor2;
        console.log(" Resultado da soma é: = " + resultado);
   
    }

    multiplicar( valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 * this.valor2;
        console.log(" Resultado da Multiplicação é: = " + resultado);

    }

    dividir( valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 / this.valor2;
        console.log(" Resultado da divisão é: = " + resultado);
     
    }
}


// criando o objetivo
var calc= new Calculadora();

// chamando o método de soma
calc.somar(7, 3); // Resultado da soma: 10

var calc = new Calculadora();

calc.multiplicar(7, 3);

var calc = new Calculadora();

calc.dividir(9, 3);
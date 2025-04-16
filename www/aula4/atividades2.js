function converterParaFahrenheit(celsius) {
  var F = (celsius * 1.8) + 32
  return F;
}

var temperatura = converterParaFahrenheit(35);
console.log(" O valor da temperatura é: " + temperatura + "°F" );

//2

function mediaNotas(a,b,c) {
  var media = (a + b + c )/ 3 
  return media;
}

var nota = mediaNotas(5,4,6);
console.log("A média do aluno é de: " + nota);

//3 

function quadrado(numero) {
  var resultado = numero * numero ;
  return resultado;
}

var valor = quadrado(8);
console.log("O quadrado de 8 é: " + valor);

//4

function minutosParaSegundos(minutos) {
  var segundos = minutos * 60
  return segundos
}

var segundos = minutosParaSegundos(7);
console.log("O minuto convertido em segundos fica:" + segundos + "s");

//5 

function horasParaMinutos(horas) {
  var minutos = horas * 60
  return minutos 
}

var minutos = horasParaMinutos(3);
console.log("A quantidade de minutos em 3 horas é: " + minutos + "min.");


//6

function verificarNomes(nome1,nome2) {
  if(nome1 == nome2) {
      console.log("Iguais")
  } else 
      console.log("Diferentes")
  
}


verificarNomes("Maria","Maria")
verificarNomes("João","José")
verificarNomes("Hugo","Hugo")
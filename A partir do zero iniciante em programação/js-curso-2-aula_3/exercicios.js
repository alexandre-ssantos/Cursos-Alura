// let peso = prompt("Informe o seu peso:");
// let altura = prompt("Informe a sua altura:");

// function IMC(peso, altura){
//     let resultadoIMC = peso/(altura*altura);
//     return resultadoIMC;
// }

// let mensagemIMC = IMC(altura,peso);

// console.log(mensagemIMC)

// let numero = prompt("Informe a fatorial:")

// function fatorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     return n * fatorial(n - 1);
//   }
  
//   // Exemplo de uso:
//   console.log(`O fatorial de ${numero} é: ${fatorial(numero)}`);

// function converteDolar(valorDolar){
//     let cotacao = 5.00;
//     let valorReais = valorDolar * cotacao;
//     return valorReais.toFixed(2);
// }

// let valorDolar = 50;
// let valorReais = converteDolar(valorDolar);
// console.log(`${valorDolar} dólares equivalem a ${valorReais}`);

function areaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = altura * largura;
}


let altura = 50;
let largura = 10;
areaRetangular(altura, largura);

console.log(`A área da sala é igual a:${area} m.`)
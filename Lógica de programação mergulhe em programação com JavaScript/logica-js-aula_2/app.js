// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 9;
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto){
//     chute = prompt('Escolha um número entre 1 e 10');
//     if (chute == numeroSecreto) {
//         alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//     } else {
//         if (chute > numeroSecreto){
            
//             alert(`O número é menor que ${chute}`);
//         } else {
//             alert(`O número é maior que ${chute}`);
//         }
//         tentativas++;
//     }
// }


// let contador = 1;
// while (contador < 11) {
//     console.log(contador);
//     contador++;
// }

// let contador = 10;
// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }

// let contador = prompt('Insira o número para contagem regressiva.')
// // while (contador >= 0){
// //     console.log(contador);
// //     contador--;
// // }

// let numero = prompt('Insira o número para contagem regressiva.')
// let contador = 0;
// while (contador <= numero){
//     console.log(contador);
//     contador++;
// }

let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
alert('Boas vindas ao jogo do número secreto!!');

let numeroSecreto = 29;
let numeroChute = prompt('Qual o número secreto? De 1 a 5000')


if (numeroSecreto == numeroChute) {
    console.log('Acertou!')
} else {
    console.log('Errou!')
}
// alert('Boas vindas ao jogo do número secreto!!');

// let numeroSecreto = 29;
// let numeroChute = prompt('Qual o número secreto? De 1 a 5000');


// if (numeroSecreto == numeroChute) {
//     alert(`Acertou! Seu número é igual a ${numeroSecreto}`)
// } else {
//     alert('Errou!')
// }

// 02 - Exercicios

// let diaSemana = prompt('Que dia da semana estamos?');

// if (diaSemana == 'Sábado'){
//     alert('Bom final de Semana')
// } else if(
//     diaSemana == 'Domingo'){
//     alert('Bom final de Semana')
// } else {
//     alert('Boa semana!')
// }

let nameUser = prompt('Por favor, informe seu nome.');
alert(`Seja bem-vindo ao Cassino ${nameUser}`)

let saldoUser = 958;
if (saldoUser < 0) {
    alert(`${nameUser} você está com o saldo positivo, pode jogar.`)
    
} else {
    alert(`${nameUser} você está com o saldo negativo tente novamente mais tarde.`)
}
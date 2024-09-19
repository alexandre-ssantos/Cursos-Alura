let numeroSecreto = numeroRandom();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('O botão foi clicado');
}

function numeroRandom(){
    return parseInt(Math.random() * 10 + 1);
}




// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';

// function verificarChute () {
//     console.log('O botão foi clicado');
// }

// function verificarChute() {
//     alert('Eu amo JS')
// }

// function verificarChute(){
//     let nomeCidade = prompt("Digite o nome de uma cidade do Brasil")
//     alert(`Estive em ${nomeCidade} e lembrei de você.`)
// }

// function verificarChute(){
//     let numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
//     let numero2 = parseInt(prompt('Digite o segundo número inteiro:'));
//     let resultado = numero1 + numero2;
//     alert(`Este foi o resultado da soma dos números ${resultado}`)
// }
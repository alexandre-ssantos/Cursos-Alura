// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolhe um número entre 1 e 10';

// function verificarChute() {
    
// }


let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

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

function verificarChute(){
    let numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    let numero2 = parseInt(prompt('Digite o segundo número inteiro:'));
    let resultado = numero1 + numero2;
    alert(`Este foi o resultado da soma dos números ${resultado}`)
}
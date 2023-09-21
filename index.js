// O que o código abaixo está fazendo? Qual o resultado impresso no
// console?
let valor = 0
for(let i = 0; i < 5; i++) {
valor += i
}
console.log(valor)
// o codigo tem duas variaveis, i e valor, a cada loop o valor i é acrescentado em 1 e o valor é acrescentado com o valor atual do i, e no final de tudo, qunado a variável para pois o i chega no seu limite estabelecido (numero menor que 5), o valor ''valor'' é impresso, sendo 10

// Leia o código 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (const [indice, numero] of lista.entries()) {
    if (numero>18){
    console.log(indice);
     }
  }
// a) O que vai ser impresso no console?
// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o
// for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

// a) imprime todos numeros maiores que 18, ate terminar o array
// b) Sim, porém acrescentado do método .entries(), com o código ficando assim:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (const [indice, numero] of lista.entries()) {
    if (numero>18){
    console.log(indice);
     }
  }


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
    }
    
//*
//**
//***
//****

// Exercícios de escrita de código
// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde
// esse dado em uma variável.
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar
// um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes
// deles, um por um, e guarde esses nomes em um array
// 💡 Dica
// ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser
// executado a mesma quantidade de vezes que o usuário
// inseriu. Por exemplo: se o usuário tem 4 pets, ele deve
// conseguir inserir 4 nomes.



let quantia = 
Number(prompt('Quantos bichos de estimacao você tem?'))

if (quantia > 0){
    let array = []
    let numero = 0
    let bome = ''
    while (numero<quantia){
        nome = prompt('Digite o nome de um deles, repetir')
        array.push(nome)
        numero++

    }console.log(array)
}else{
    console.log('Que pena! Você pode adotar')
}
// Considere que você tenha acesso a um array (chamado de 'array
// original') que é composto somente de números. Baseando-se nisso, crie
// uma função para cada um dos itens abaixo, realizando as operações
// pedidas:
// a) Escreva um programa que imprime cada um dos valores do array
// original.
// b) Escreva um programa que imprime cada um dos valores do array
// original divididos por 10
// c) Escreva um programa que crie um novo array contendo, somente, os
// números pares do array original e imprima esse novo array
// d) Escreva um programa que crie um novo array contendo strings, da
// seguinte forma: "O elemento do índex i é: numero ". Depois, imprima este
// novo array.
// e) Escreva um programa que imprima no console o maior e o menor
// números contidos no array original

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a) Escreva um programa que imprime cada um dos valores do array
// original.
function imprimirArray(numero) {
    let limitearray = array.length
    numero = 0
    while (numero<limitearray){
        console.log(array[numero])
        numero++
    }
    return console.log('Acabou!')

    
}

imprimirArray()

// b) Escreva um programa que imprime cada um dos valores do array
// original divididos por 10

function imprimirArray2(numero) {
    let limitearray = array.length
    numero = 0
    while (numero<limitearray){
        console.log(array[numero]/10)
        numero++
    }
    return console.log('Acabou!')

    
}

imprimirArray2()

// c) Escreva um programa que crie um novo array contendo, somente, os
// números pares do array original e imprima esse novo array

function imprimirArrayPar(numero,limitearray,arrayPar) {
    limitearray = array.length
    numero = 0
    arrayPar = []
    while (numero<limitearray){
        if (array[numero]%2===0){
            arrayPar.push(array[numero])

        }
        numero++
    }
    return console.log(arrayPar)

}

imprimirArrayPar()

// d) Escreva um programa que crie um novo array contendo strings, da
// seguinte forma: "O elemento do índex i é: numero ". Depois, imprima este
// novo array.

function imprimirArrayString(numero) {
    let limitearray = array.length
    numero = 0
    let arrayString = []
    while (numero<limitearray){
        arrayString.push('O O elemento do índex '+ numero + ' é: '+array[numero])
        numero++
    }
    return console.log(arrayString)

    
}

imprimirArrayString()

// e) Escreva um programa que imprima no console o maior e o menor
// números contidos no array original

function imprimirArray(numero) {
    return console.log('O maior número é: '+Math.max(...array)),console.log('O menor número é: '+Math.min(...array))
}

imprimirArray()

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
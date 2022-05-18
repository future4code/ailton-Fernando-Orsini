// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo
//     function minhaFuncao(variavel) {
//         return variavel * 5
//     }
    
//     console.log(minhaFuncao(2))
//     console.log(minhaFuncao(10))

//     a) O que vai ser impresso no console?
//     10 e 20.

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// a mesma coisa. 


// 2.Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// Ela muda o texto para letras minúsculas e se o caracter "cenoura" está ou não na string texto, 
// retornando um booleano true ou false dependendo da resposta. 

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//      `eu gosto de cenoura`, true
//      ii.  `CENOURA é bom pra vista`
//      `cenoura é bom pra vista`, true
//      iii. `Cenouras crescem na terra`
//      `cenoura crescem na terra`, false


// Exercícios de escrita de código

// 1. Escreva as funções explicadas abaixo:
    
//     a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.


// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
// Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

const imprimeMensagem = (nome, idade, cidade, ocupacao) => {
    const nome = prompt('Digite o seu nome!')
    const idade = prompt('Digite a sua idade!')
    const cidade = prompt('Digite a cidade em que você vive!')
    const ocupacao = prompt('Digite o seu ocupação!')
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`
}

// 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
//     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
//     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
//     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    
const somaNumeros = (num1, num2) => {
    const num1 = prompt('Digite o primeiro número!')
    const num2 = prompt('Digite o segundo número!')
    return num1 + num2
}

const comparaNumeros = (num1, num2) => {
    return num1 >= num2 
}

const descobreParOuImpar = (numAleatorio) => {
    const numAleatorio = prompt('Digite um número!')
    const restoDaDivisao = numAleatorio % 2
    return restoDaDivisao === 0 
}
// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

const somaNumerosDoUsuario = (num1, num2) => {
    return num1 + num2
}

const subtraiNumerosDoUsuario = (num1, num2) => {
    return num1 - num2
}

const multiplicaNumerosDoUsuario = (num1, num2) => {
    return num1 * num2
}

const divideNumerosDoUsuario = (num1, num2) => {
    return num1 / num2
}

const num1 = prompt('Digite o primeiro número!')
const num2 = prompt('Digite o segundo número!')

somaNumeros

subtraiNumerosDoUsuario

multiplicaNumerosDoUsuario

divideNumerosDoUsuario



// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  num1 = 1
  num2 = 2
  return num1 + num2
}
soma

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  mensagem = "olá mundo!"

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const altura = prompt('Digite o valor da altura do retângulo!')
  const largura = prompt('Digite o valor da largura do retângulo!')
  return altura * largura

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascDoUsuario) {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual!')
  let anoDeNascDoUsuario= prompt('Digite o ano em que você nasceu!')
  return anoAtual - anoDeNascDoUsuario

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const peso = prompt('Digite o seu peso em kg!')
  const altura = prompt('Digite a sua altura em m!')
  return peso / altura * altura

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite o seu nome!')
  const idade = prompt('Digite a sua idade!')
  const email = prompt('Digite o seu email!')

  return console.log("Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.") 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite sua primeira cor favorita!')
  const cor2 = prompt('Digite sua segunda cor favorita!')
  const cor3 = prompt('Digite sua terceira cor favorita!')
  return [cor1, cor2, cor3]

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string = prompt('Digite uma frase em letras minúsculas')
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroItem = array[0]
  return primeiroItem

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.lastIndexOf()
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  return array.reverse()

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1 == string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
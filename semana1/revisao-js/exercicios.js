// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a,b) => {
      if (a > b) {
          return 1
      }
      if (a < b) {
          return -1
          
      } 
      return 0
  })
} 

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const verificaPar = (array) => {
      if (valor % 2 === 0 ) {
          return valor
      }
  }
  const numerosPares = array.filter(verificaPar)
  console.log(numerosPares)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    retornaNumerosPares
 const paresAoQuadrado = numerosPares.map(function(item) {
     return Math.pow(item, 2)

 })
   console.log(paresAoQuadrado)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maiorNumero = array.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
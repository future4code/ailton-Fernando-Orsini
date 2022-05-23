/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    const carta = comprarCarta() => {
      console.log(carta.texto)
      console.log(carta.valor)
    }
    

    const imprimeMensagem = () => {
       console.log("Boas vindas ao jogo de Blackjack!")
       if (confirm("Quer iniciar uma nova rodada?")) {
          comprarCarta()
       } else {
         console.log("O jogo acabou")
       }
    } 

    const usuario = (comprarCarta()) => {
      console.log("Usuário - cartas:", `texto` + `valor`,  "- pontuação" `Number`)
      return pontuacao 
    }
      
    const computador = (comprarCarta()) => {
      console.log("Computador - cartas:", `texto` + `valor`,  "- pontuação" `Number`)
      return pontuacao  
    } 

     const mostraResultado (usuario(), computador ()) => {
        if (usuario.pontuacao > computador.pontuacao) {
           console.log("O usuário ganhou!")

        } else if (usuario.pontuacao === computador.pontuacao) {
         console.log("Empate!")
        } else {
         console.log ("O computador ganhou!") 
        }
     }
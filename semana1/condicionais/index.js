// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo:
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Ele cria a condição de que se (if) o resto da divisão de um número por dois for zero , então o número passou no teste. 
// Se não (else), ele não passou no teste.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Números pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Números ímpares.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// Ele repassa um preço para o usuário, dependendo da fruta que este digite, ou o preço padrão (default) de 5.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// 2.25.
// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// 5.5.

// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// Está dando a condição de que se um número for maior que zero, ele passa no teste.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
// E se fosse o número -10?
// Se o usuário digitar 10, o número passou no teste. Se digitar -10, o número não passou no teste, mas 
// não foi estabelecida uma condição diferente, apenas a variável let mensagem para os dois casos ("Essa mensagem é secreta!!!").

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, pois a variável mensagem está no escopo local do condicional if e não foi invocada no fim da função.



- **Exercícios de escrita de código**
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
        a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
        b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
        c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

        const idadeDoUsuario = prompt('Digite a sua idade')
        const idadeDoUsuario = idade.toNumber()
        if (idadeDoUsuario >= 18) {
            console.log("Você pode dirigir")
        } else {
            console.log("Você não pode dirigir")
        } 


        
    2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

    let turno = prompt ('Escolha um turno M(matutino), V(vespertino), ou N(noturno)')
    let turnoDoUsuario
    if (turnoDoUsuario === M) {
        console.log("matutino")
    } else if (turnoDoUsuario === V) {
        console.log("vespertino")
    } else if (turnoDoUsuario === N) {
        console.log("noturno")
    }
    3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

    - 
    
    <aside>
    ⭐ Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)
    
    </aside>

let turno = prompt ('Escolha um turno M(matutino), V(vespertino), ou N(noturno)')
let turnoDoUsuario
switch (turno) {
    case "M":
        turnoDoUsuario = "matutino"
        break;
    case "V":
        turnoDoUsuario = "vespertino"
        break;
case "N":
        turnoDoUsuario = "noturno"
        break;

    default:
        break;
}
    

4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

let filme = prompt ('Escolha um filme')
    let filmeDoUsuario
    if (filmeDoUsuario === {genero = "fantasia", preco = "15 reaisf"} ) {
        console.log("Bom filme!")
    } else{
        console.log("Escolha outro filme :(")
    }
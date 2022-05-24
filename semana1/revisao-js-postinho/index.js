
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}

// c-)Faça uma função chamada "verificaSeEMaior"
const verificaSeEMaior = (a, b) => {
    if (a > b) {
        console.log("O valor A é maior do que o B")
    } else {
        console.log("O valor A é menor do que o B")
        
    }
}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=
// R: true
// b-) 1=='1'=
// R: false
// c-) 'a'==='b'=
// R: true
// d-) 'b'>'a'=
// R: false
// e-) 0!==null=
// R: true



// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    //  Sua lógica aqui
    const nomeDoUsuario = prompt('Digite o seu nome!')
    const anoDeNascimento = prompt('Digite o ano do seu nascimento!')
    const senhaDoUsuario = prompt('Digite a sua senha!')
    const nacionalidade = prompt('Digite a sua nacionalidade!')
    console.log(usuario = [nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade])

    if (usuario.anoDeNascimento <= 2004) {
        
    } else if (usario.nacionalidade === 'brasileiro' || 'brasileira') {

    } else if ( usuario.senhaDoUsuario.lenght === 5){
        console.log('Você pode se cadastrar!')
    } else { 
       console.log('Você não pode se cadastrar, pois não preencheu os requisitos mínimos') 
    }


}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
if (login === 'labenu') {
console.log('Usuário Logado')    
} else {
    console.log('Senha Inválida')

}
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui
    if (usuario.imunizacao === 'incompleta') {
        let data = prompt('Qual a data da sua primeira dose? DD/MM/AAAA')
        let marcaDaVacina = prompt('Na sua primeira dose, você tomou: Coronavac, Astrazeneca ou Pfizer?')

    } else if (tempo === 'Cornovac') {
        tempo = 28

    }else if (tempo === 'Astrazeneca') {
        tempo = 90

    } else if (tempo === 'Pfizer') {
        tempo = 90

    }
    let dataSegundaDose = new Date (data)
        dataSegundaDose.setDate(data.getDate() + tempo)   

        console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataSegundaDose}.`)

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    if (usuario.imunizacao === "incompleta") {
        usuario.imunizacao = "completa"

    }
    
}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
   const atrasados = usuarios.filter((usuario, indice, array) => {
      return usuario.imunizacao === "incompleta"  
   })
   console.log(`Olá ${nome}! Sua imunização está ${imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());
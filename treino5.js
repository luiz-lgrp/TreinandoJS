// Crie uma função para verificar se um valor é Truthy


function verificaijon(valor){
    if(!!valor){
        console.log("Esse bilhete é verdade")
    }
    else{
        console.log("é cilada Bino")
    }
}
verificaijon("eu")

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

var ladoQuadrado = 2

function perimetro(){
    console.log(ladoQuadrado*4)
}

perimetro()

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

var nome = "Luiz Gustavo"
var sobrenome = "Rosa de Paula"

function nomeCompleto(){

  nomeCompleto = nome + " " + sobrenome;

   console.log(nomeCompleto)
}
//nomeCompleto()


// Crie uma função que verifica se um número é par

var n = 28

function parOUimpar(){

    if (n / 2 === 0){
        console.log("É Par")
    }
    else{
        console.log("É Impar")
    }
}
parOUimpar()

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

var tipo = "28"
function tipologia(){
    console.log(typeof tipo)
}
tipologia()

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", nomeCompleto) //Usei a função da linha 32
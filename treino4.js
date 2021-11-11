// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual

var minhaIdade = 30
var tioIdade = 45

if (minhaIdade > tioIdade){
    console.log("É maior!");
}
else if (minhaIdade === tioIdade){
    console.log("É igual!");
}
else{
    console.log("É menor!");
}

// Qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3 Por && retorna o último valor verdadeiro


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

//console.log(!!Nome_da_Variavel);


// Compare o total de habitantes do Brasil com China (valor em milhoes)

var brasil = 207;
var china = 1340

if (brasil > china){
    console.log("Brasil tem mais habitantes")
}
else{
    console.log("China tem mais habitantes")
}


// O que irá aparecer no console?

if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
    } else {
    console.log('Falso');
    } //FALSO

    // O que irá aparecer no console? 

    if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
    } else {
    console.log('Falso');
    }//cao
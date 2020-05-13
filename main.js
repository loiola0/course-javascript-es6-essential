//Módulo 2: tipos e váriaveis.
/*
string,number,boolean,null,undefined,symbol,Object,Function,Array.
*/

//Vou colocar os exemplos que considerei mais importantes.

//Retorna o tamanho de uma string.
const textsize = 'Victor'.length;
console.log(textsize);

//Retorna um Array quebrando a string por um delimintador.
const splintedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo um delimintador', splintedText);

//Busca por um valor e substitui por outro.
const replacedText = 'VICTOR BRASILEIRO'.replace('BRASILEIRO','GABRIEL');
console.log('\nTexto substituído: ',replacedText);

//Retorna a "fatia" de um objeto.
const lastchar = 'Victor'.slice(-1);
console.log('\nÚltima letra de uma string: ',lastchar);

const allWithOutLastChar = 'Victor'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a última: ',allWithOutLastChar);

const secondToEnd = 'Victor'.slice(1);
console.log('\nValor da string começando da segunda letra até a última: ',secondToEnd);

//Retorna N caracteres apartir de uma determinada posição.
const twoCharsBeforeFirstPos = 'Victor'.substr(0,2);
console.log('\nAs duas letras primeiras são:',twoCharsBeforeFirstPos);

//Transfroma uma string em um float.
console.log('\nString parseada em uma float', typeof parseFloat('13.32'));

//Transfroma uma string em um int.
console.log('\nString parseada em uma float', typeof parseInt('129'));


const myNumber = 12.4002;

//Transformar número para string.
const numberAsString = myNumber.toString();
console.log('\nNúmero transformado em uma string:', typeof myNumber);

//Retorna número com um número de casas decimais.
const fixedTwoDecimails = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimails);


















// //utilizando o Currying.
// /*  basicamente pega um parâmetro 3(no qual padronizamos ao parâmentro a) e é repassado a uma função
// com um parâmetro no qual o usuário vai atribuir valor a b.


// function soma(a){
//     return function somaWithParmstTwo(b){
//         return a+b;
//     }
// }


// const soma1 = soma(3);


// console.log(soma1(2));
// console.log(soma1(5));
// console.log(soma1(6));
// console.log(soma1(10));


// //Utilizando o Hoisting
// /*
// Faz que uma função  ou uma variável não declarada anteriomente antes de chamar-las
// sejam declaradas mas sem valor(variável), no caso das funções elas são chamadas para acima de onde foi
// declarado a váriavel.


// function mensagem(){
//     /*
//         com o hoisting a variáveel é implicitamente declara mas sem valor atribuido, exemplo:
//         var a;

//         *Em outras linguagens daria algum reference erro ou váriavel não declarada.
//     */
//     return console.log(a);

//     var a = 'olá';
// }


// mensagem();

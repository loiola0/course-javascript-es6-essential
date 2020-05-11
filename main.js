//utilizando o Currying.
/*  basicamente pega um parâmetro 3(no qual padronizamos ao parâmentro a) e é repassado a uma função
com um parâmetro no qual o usuário vai atribuir valor a b.
*/

function soma(a){
    return function somaWithParmstTwo(b){
        return a+b;
    }
}


const soma1 = soma(3);


console.log(soma1(2));
console.log(soma1(5));
console.log(soma1(6));
console.log(soma1(10));


//Utilizando o Hoisting
/*
Faz que uma função  ou uma variável não declarada anteriomente antes de chamar-las
sejam declaradas mas sem valor(variável), no caso das funções elas são chamadas para acima de onde foi
declarado a váriavel.
*/

function mensagem(){
    /*
        com o hoisting a variáveel é implicitamente declara mas sem valor atribuido, exemplo:
        var a;

        *Em outras linguagens daria algum reference erro ou váriavel não declarada.
    */
    return console.log(a);

    var a = 'olá';
}


mensagem();
//arrow function.

const arrowFn = () => 'Code here';

//Mais de uma expressão.
const arrowFn2 = () => {
    return 'Code here';
}

//funções e arrays também são objetos.

fun.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber Parâmetros

const logValue = value => console.log(value);

//Receber e retornar funções

const controlFnExec => fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}
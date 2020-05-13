const users = ['Victor','Lucas','Vanessa'];


const gender = {
    Man: Symbol('M'),
    Woman: Symbol('W')
}

const persons =[
    {
        name: 'Victor',
        age: 19,
        gender: gender.Man
    },
    {
        name: 'Lucas',
        age: 14,
        gender: gender.Man
    },
    {
        name: 'Vanessa',
        age: 30,
        gender: gender.Woman
    },
];


//Retorna a quantidade de item de um array.
console.log('Itens:',persons.length);


//Verificar se é um array
console.log('A váriavel persons é um array:', Array.isArray(persons));

//Iterar os itens do array.

persons.forEach((person,index,arr)=>{
    console.log(`Nome: ${person.name}, index: ${index}, array:`,arr);
});

//Filtra um array.

const mens = persons.filter(person => person.gender === gender.Man);
console.log('\n Nova só com homens',mens);

//Retornar um novo array

const personsWitheCourse = persons.map(person =>{
    person.course = 'Introdução a JavaScript';
    return person;
});

console.log('\nPessoas com adição do curso: ',personsWitheCourse);

//transforma um array em um outro tipo

const totalAge = persons.reduce((age,person)=>{
    age += person.age;
    return age;
},0);

console.log('\n Idade total',totalAge);


//juntando operações

const totalEvenAges = persons
                            .filter(person => person.age %2 ==0)
                            .reduce((age,person)=>{
                                age+=person.age;
                                return age;
                            },0);

console.log('Retorna a soma das idade das pessoas que tem idade par',totalEvenAges);

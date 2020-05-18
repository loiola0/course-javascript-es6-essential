const arr = ['Victor','Passáro','amor',['asasas',['oie']]];


 arr.forEach((index,value,ar)=>{
     console.log(`${index}: ${value} -> ${ar}`);
});


//usando o flat

console.log(arr.flat(2));


//usando splice
const frutas = ["maracujá", "melancia", "abacaxi", "caju"];
frutas.splice(2, 2, "amora");
console.log(frutas);
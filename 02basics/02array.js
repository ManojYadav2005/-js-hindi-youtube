
const marvelheros=["Thor", "Ironman","Spiderman"]
const dcheros=["Superman","Flash", "Batman"]

// marvelheros.push(dcheros)
// console.log(marvelheros);
// console.log((marvelheros[3][1]));

// marvelheros.concat(dcheros)
// console.log(marvelheros);


const anotherarr=[1,2,3,[4,5,6],7,[4,5]]
const realanotherarr=anotherarr.flat(Infinity)
console.log(realanotherarr);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})); // Intresting case

let score1=100
let score2=200
let score3=300

console.log((Array.of(score1,score2,score3)));





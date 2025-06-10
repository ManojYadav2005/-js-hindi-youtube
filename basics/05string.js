
const name="Manoj"
const repoCnt=44

console.log(name+repoCnt);// old method

console.log(`Hello my name is ${name} and my repo cnt is ${repoCnt} `); // new method

// string declare
const gameName= new String('Manoj-Kumar-Yadav')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('j'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-4,4)
console.log(anotherString);

//trim -> remove the space
const newStringOne="  Manoj  "
console.log(newStringOne);
console.log(newStringOne.trim());   // trim


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')). // replace
console.log(url.includes('hitesh')); // check

console.log(gameName.split('-'));  // in new array

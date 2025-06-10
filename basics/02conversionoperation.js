
let score=45
console.log(typeof score);  // 1
console.log(typeof (score));  // 2

let sco="45abc"
let valnum=Number(sco)
console.log(typeof valnum);  //3
console.log(valnum);      // 4

// "45"=>45
// 45abc =>NaN
// true => 1; false => 0


let isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);    // 5

let s=56
let sn=String(s)
console.log(sn);         // 6
console.log(typeof sn);   // 7
// 1.
// const useremail="manoj.com"

// if(useremail){
//     console.log("Got email");
// }
// else{
//     console.log("Don't got email");
    
// }
// falsy values :
// false,0,-0,BigInt 0n, "" ,null,undefined,NaN

// truthy values :
//   "0",'false'," ",[],{},function(){}

// 2.

const emptyObj={}

if(Object.keys(emptyObj).length===0){
console.log("Object is empty");
}


// 3.

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1=5 ?? 10

// console.log(val1);


// // 4.

// let val1;
// val1=null ?? 10
// console.log(val1);


// 5.
// let val1;
// val1=undefined ?? 10
// console.log(val1);


// 6.

// let val1;
// val1=null ?? 10 ?? 33
// console.log(val1);


// terniary operator
// condition ? true : false
// 7.

const icete=100
icete>=33 ? console.log("More then 33") : console.log("User log in");







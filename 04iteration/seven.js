const mynum=[1,1,2,3,4,5,6,7,8,9,10]

// const newnum=mynum.map((num) => num +10)
// console.log(newnum);

//. or with scope

// const newnum=mynum.map((num) => { return num +10 })
// console.log(newnum);

// or
// const val=mynum.forEach((item)  => 
// {
//     console.log(item+10);
//     return item
// }
// )
//console.log(val);

const newnums=mynum
                   .map( (num) => num*10 )
                   .map( (num) => num+1 )
                   .filter( (num) => num >= 40 )
console.log(newnums);
                   
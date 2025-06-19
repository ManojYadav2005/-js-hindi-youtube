 //    2.

//  const coding=["JS","RUBY","JAVA","PYTHON","CPP"]
 
//  const values=coding.forEach((item) => {
//  console.log(item);
//  return item
//  })
//  console.log(values);
 

//        2.

// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.filter((num) => num > 4)
// console.log(newnum);

const mynum=[1,2,3,4,5,6,7,8,9,10]
const newnum=mynum.filter( (num) => {
return num > 4
})
console.log(newnum);

const books= [
{ 
title: 'Book one', genre:'Non-fiction',publish:1989,
edition:2010 },
{ 
title: 'Book two', genre:'Science',publish:1999,
edition:2010 },
{ 
title: 'Book three', genre:'History',publish:1995,
edition:2012 },
{ 
title: 'Book four', genre:'History',publish:1998,
edition:2014 },
]

// const userbooks=books.filter((bk) => bk.genre === 'History')
// console.log(userbooks);
//   or

let userbooks=books.filter((bk) => bk.genre === 'History')
userbooks=books.filter((bk) => {
return bk.publish >= 1995
})
console.log(userbooks);



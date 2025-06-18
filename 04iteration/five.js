// 1.       forEach loop

 const coding = ["js","ruby","java","cpp"]
// coding.forEach( function name(item) {
//     console.log(item);
    
// } )

// or. arrow function


// coding.forEach( (item) =>{
//     console.log(item);
    
// }    )

//  or

// function printme(item){
// console.log(item);
// }
// coding.forEach(printme);

//        or

// coding.forEach((item,index,arr) => {
// console.log(item,index,arr);
// }
// )

const mycoding =[
    {
    languageName: "Javascript",
    languageFileName: "Java"
    }
]
mycoding.forEach(  (item) => {
console.log(item.languageFileName);
})
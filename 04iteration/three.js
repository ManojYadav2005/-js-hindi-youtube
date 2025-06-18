 
//  ["","",""]
//  [{},{},{}]
// 1.

// const arr=[1,2,3,4,5]
// for (const i of arr) {
//  console.log(i);
// }

// const greetings="Hello duggu!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// 2. Maps

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United state of america")
map.set('Fr',"France")
  //console.log(map);
// forof loop
    // for (const key of map) {
    //  console.log(key);
        
    // }

    //   for (const [key,value] of map) {
    //  console.log(key, ':-', value);
    // }

    const myobject={
    'game1': 'NFS',
    'game2':'Spiderman'
    }
    for (const [key,value] of myobject) {
      console.log(key,':-',value); 
    }
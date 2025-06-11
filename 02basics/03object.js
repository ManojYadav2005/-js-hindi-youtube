
const mySym=Symbol("key1") // add symbol in object



const JsUser = {
name: "Hitesh",
"full name":"Hitesh Choudhary",
[mySym]: "key1",
age:18,
location:"Jaipur",
email:"hitesh@google.com",
isLogggedIn: false,
lastlogindays:["Monday","Saturday"]

}
console.log(JsUser.email);    // dot notation
console.log(JsUser["email"]);    // bracket notation
console.log(JsUser["full name"]);  // must use brackets due to space
console.log(JsUser[mySym]);   // access Symbol key

JsUser.email="Manojyadav945871@gmail.com"
// Object.freeze(JsUser)
//JsUser.email="Manoj@microsoft.com"
console.log(JsUser);



JsUser.greeting = function(){
console.log(("Hello JS user"));
}
JsUser.greeting2 = function(){
console.log((`Hello JS user, ${this.name}`));
}
console.log(JsUser.greeting());

console.log(JsUser.greeting2());




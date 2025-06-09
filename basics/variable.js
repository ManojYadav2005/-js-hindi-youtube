
const accountId = 123232
let accountemail="Manoj1232gmail.com";
var accountPassword="123123";
accountCity="Jaipur";

/*
Prefer not to use var
bcz of issue in block scope and functional scope
*/


accountemail="hc@hc.com"
accountPassword="1122121"
accountCity="Bengaluru"

console.log(accountId);

console.table([accountId,accountemail,accountPassword,accountCity])
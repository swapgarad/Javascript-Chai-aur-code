const accountId = 1412698604
let accountEmail = "swapnil@gmail.com"
var accountPassword = "123456"
accountCity = "Solapur"



accountEmail = "neel@gmail.com"
accountPassword = "989796"
accountCity = "pune"
let accountState;


console.log(accountId);

/*
 accountId = 2 is not going to execute as its a constant

console.table([]) ==>>gave all the detailed variabls at one place in tabular form used to reduced multiple time use of console.log()

 {} are also called as scope and js nowdays never use 'var' variable as scope created problem in var...it only use 'const' & 'let' for the denotion of variable

 prefer not to use 'var'
 because of issue in block scope and functional scope

 in js if variable is not stated specifically, it considered as 'undefined' by default like state in example
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

//****************CONVERSION************//

let score = "swapnil"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


// "45" =>output= 45; typeof data=number 
// "45abc" =>output= NaN i.e. Not a Number; typeof data=number 
// true =>output=1 ; typeof data=boolean
// false =>output=0 ; typeof data=boolean

let isLoggedIn = "swapnil"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
 for boolean value conversion:
 1 => true ; 0=> false
 " " => false
 "swapnil" => true
 */

 let someNumber = 10

 let stringNumber = String(someNumber)

 console.log(stringNumber);
 console.log(typeof stringNumber);

 //*************OPERTIONS**********

let value = 5
let negValue = -value
console.log(-value);


// Joining two string:
let str1 = "hello"
let str2 = " Swapnil"

let str3 = (str1 + str2)

console.log(str3);

// Joining complex/different datatype string:

// console.log("1" + 2);   // output=12
// console.log(1 + "5");   //output=15
// console.log(1 + "5" + 9);   //output=159
// console.log(1 + 5 + "9");   //output=69

console.log(+true);   // output will be 1(as 0 + 1=1)
console.log(+"");     // output will be 0(as 0+0=0)

console.log(true+);   // output will be error as operator precedent is wrong

// PREFIX & POSTFIX INCREMENT OPERATOR

let gameCounter = 450
gameCounter++
++gameCounter
console.log(gameCounter);

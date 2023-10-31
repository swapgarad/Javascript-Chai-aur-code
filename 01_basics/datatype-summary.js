/*

DATA CATEGORISATION: 
 1) PREMITIVE DATA TYPES
 2) NON PREMITIVE DATA TYPES / REFERENCE DATA TYPES

# PREMITIVE DATA TYPES: (total 7 types are there)
String, Number, Boolean, Null, Undefined, Symbol, BigInt

*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

/*

#JavaScript is a DYNAMICALLY TYPED LANGUAGE , which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them


# NON-PREMITIVE / REFERENCE DATA TYPES:
Array, Objects, Functions
 
*/

// Array Example:

const heros = ["shaktiman", "naagraj", "doga"];

// Objects Example: (must be written in Key-Value pair & inside curly braces { } with any datatype)

let myObj = {
    name: "swapnil",
    age: 29,
};

//Function Example: [ It must be written as, function () {} ]

const myFunction = function () {
    console.log("Hello world");
};

console.log(typeof anotherId);

// #### HOW TO KNOW THE DATA TYPES ###

console.log(typeof bigNumber); //====>>> output came as bigint
console.log(typeof score); //===>>> output is number
console.log(typeof outsideTemp); //===>>> output is object
console.log(typeof isLoggedIn); //===>>> output is boolean
console.log(typeof userEmail); //===>>> output is undefined
console.log(typeof myFunction); //===>>> output is function
console.log(typeof heros); //===>>> output is object with datatype as string
console.log(typeof myObj); //===>>> output is object

// REFERENCE STUDY FOR DATATYPES:

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++ MEMORIES OF DATATYPES TO STORE ++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1) Stack Memory (used to store PREMITIVE DATATYPES)

// It always gave copy of value from previous stack/cupboard.ALL THE CHANGES/UPDATES YOU HAVE DONE IS NOT TO THE ORIGINAL VALUES BUT TO COPY OF IT.

let myYoutubename = "swapnilgarad";

let anothername = myYoutubename;

anothername = "swap_world";

console.log(myYoutubename); //====>>> output is "swapnilgarad"

console.log(anothername); //====>>> output is "swap_world"

// 2)Heap Memory ( used to store Non-Premitive/Reference Data Types)

// it always give reference to originsl value & directly refered to one big memory heap/basket. ALL THE CHANGES/UPDATES YOU HAVE DONE IS TO THE ORIGINAL VALUES

let userOne = {
    email: "swapnil@google.com",
    upi: "swapnil@ybl",
};

let userTwo = userOne;

userTwo.email = "swapnilgarad@google.com";

console.log(userOne.email); // output is "swapnilgarad@google.com"
console.log(userTwo.email); // output is "swapnilgarad@google.com"

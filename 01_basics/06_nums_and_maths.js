// +++++++++++++++++++ NUMBERS ++++++++++++++


const score = 450
console.log(score);    //===>>> output came as 450 as by default it consider as number


const balance = new Number(999)
console.log(balance);   //========>>> as we specifically asked about Number,output came as  [Number: 999]

//METHOD TO  CONVERT FROM NUMBER TO STRING:

console.log(balance.toString());   //====>>> output came as 999 in string format
console.log(balance.toString().length);   //====>>> output came as 3 as a length of string 
console.log(balance.toFixed(2));   //====>>> output came as 999.00 as gave value upto 2 decimal point...always try to use toFixed(2) for e-commerce website development as standerd.

const anotherNumber = 735.6738

console.log(anotherNumber.toPrecision(4));  //====>>> output came 735.7 toPrecision() method of Number values returns a string representing this number to the specified precision


// toLocaleString (used to simplify big hunderds value by applying comma as per requirement ) :

const hunderds = 10000000000

console.log(hunderds.toLocaleString('en-IN'));   //====>>> it gave output as 10,00,00,00,000
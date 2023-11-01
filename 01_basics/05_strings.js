//+++++++++++++++++++++++++++++++++ STRING +++++++++++++++++++++++++++++++++++++++++

//  [ IT'S ALWAYS IN KEY-VALUE PAIR, IT IS PREMITIVE DATA-TYPE, ALSO IT HAVE LENGTH PROPERTY WHICH STARTS FROM 0]

// Traditional method of coding string:(its old method which rarely used nowadays.)

const name = "swapnil"
const repoCount = "01"

// console.log(name + repoCount + " value"); ====>>> its traditional outdated method not used currently....instead of that we use "STRING INTERPOLATION METHOD"...it create placeholders & we can directly inject variable as per our requirement in ${ }.

// +++++++++++++++ STRING INTERPOLATION METHOD +++++++++++++++++++++++++++++

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

// it gives output as ===>>> Hello my name is swapnil and my repocount is 01

// Another method to declare string

const gameName = new String('swapnilg')

//+++++++++++++++++++ VARIOUS STRING FUNCTIONS +++++++++++++++++++

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.length);  // ===>>> gave length of string

console.log(gameName.toUpperCase());   // ====>>> gives all string character in uppercase

console.log(gameName.charAt(4));     // ===>>> get character of str @ perticular position
console.log(gameName.indexOf('l'));     // ===>>> get position of character in perticular string length

// SUBSTRING FUNCTION:
const newString = gameName.substring(0, 5)      // output is 'swapn'

//====>>> substring() extracts characters from indexStart up to but not including indexEnd . In particular: If indexEnd is omitted, substring() extracts characters to the end of the string. If indexStart is equal to indexEnd , substring() returns an empty string. YOU CANNOT USE NEGATIVE INSIDE SUBSTRING FUNCTION .

console.log(newString);

// SLICE FUNCTION:
const anotherString = gameName.slice(-7, 2);

//slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string. slice() extracts up to but not including indexEnd . For example, str.slice(1, 4) extracts the second character through the fourth character (characters indexed 1 , 2 , and 3)...YOU CAN USE NEGATIVE INSIDE SLICE FUNCTION.

console.log(anotherString);          // output is 'w'

// TRIM FUNCTION:

//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string. To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd()

const newStringOne = "  swapnil  "
console.log(newStringOne);           //===>>> output as '  swapnil  '
console.log(newStringOne.trim());   //====>>> output as 'swapnil'

// REPLACE FUNCTION:

// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement

const url = "https://swapnil.com/swapnil%99garad"

console.log(url.replace('%99', '-'));

//====>>> it gave output as https://swapnil.com/swapnil-garad

// INCLUDES FUNCTION :

//The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

console.log(url.includes('swapnil')); // output is TRUE
console.log(url.includes('DEVELOPER')); // output is FALSE

// SPLIT FUNCTION :

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array

const gameNameOne = new String('swapnil-g')
console.log(gameNameOne.split("-"));        //===>>> output is Array: [ 'swapnil', 'g' ]

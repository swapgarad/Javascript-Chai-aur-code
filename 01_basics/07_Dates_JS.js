// DATES

let myDate = new Date()

console.log(myDate);

//   [ctrl + Spacebar ] used to ou can trigger IntelliSense in any editor window by typing Ctrl+Space or by typing a trigger character (such as the dot character (.) in JavaScript).

console.log(myDate.toString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toISOString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toTimeString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toJSON());

// console.log(typeof myDate);  // type of date came as Object

// let myCreatedDate = new Date(2023, 11, 1)

// console.log(myCreatedDate.toDateString()); 

// [here output will be 'Fri Dec 1 2023' as months index are starting in js is from 0     i.e. 0th month is January & 11th month will be december]


// let myCreatedDate = new Date(2023, 11, 1, 18, 10)
// console.log(myCreatedDate.toLocaleString());

// it gave you detailed time also here 18,10 means 6:10 pm

let myCreatedDate = new Date("2023-01-01") // when u specifically writing date in "yy-mm-dd" format then your month is starting from 1 & not 0

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);  // Date.now()>>>Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

console.log(myCreatedDate.getTime());  // .getTime()>>>Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC

console.log(Math.floor(Date.now() / 1000));  // *****IMP Q FOR INTERVIEW >>>Returns the stored time value in SECONDS WITH ROUND FIGURE since midnight, January 1, 1970 UTC


let newDate = new Date()
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getDay());     // it starts from MONDAY as per local time 
console.log(newDate.getMonth() + 1); // it gave you actual month as adding 1 is  to avoide getting confused as month starts from 0


console.log(newDate.toLocaleString('dafault', {
    weekday: "long"
}))                      // it gave you complete name of Day in long  words

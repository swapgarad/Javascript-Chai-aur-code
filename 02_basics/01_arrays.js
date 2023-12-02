//++++++++++++++++ ARRAYS ++++++++++++++++++++++++++

const myArr = [0, 1, 2, 3, 4, true, "swapnil"]

console.log(myArr[5])

//Array may contain NUMBERS,BOOLEAN,OBJECTS ETC MIXTURE OF DIFFERENT TYPES OF DATASETS >>>> JAVASCRIPT ARRAYS ARE RESIZABLE >>> JS ARRAYS ARE 0 INDEXED I.E. FIRST ELEMENT START FROM 0

// ()>>>> PARENTHESIS ,  []>>>BRACKETS >>>>USED IN ARRAYS, {}>>> BRACES

// IN JAVASCRIPT ARRAYS, COPY-OPEREATIONS CREATE SHALLOW-COPIES 

//( SHALLOW COPY of an object is a copy whose properties share the same references as those of source  object from which the copy was made >>>>> when you make changes to source or copy; it will cause changes to other object also >>>> you may end up unintentionally causing changes to the source or copy that you don't expect ) 

// DEEP COPY: of an object is a copy whose properties DO NOT share the same references as those of source  object from which the copy was made.>>>>> when you make changes to source or copy; it will NOT cause changes to other object  >>>> you may NOT end up unintentionally causing changes to the source or copy that you don't expect ) 

// ARRAY METHODS : 
// 1. push() method : adds new items to the end of an array. The push() method changes the length of the array and returns the new length of the array

myArr.push(6)
console.log(myArr);  // output will be [ 0, 1, 2, 3, 4, true, 'swapnil', 6 ]

// 2. pop() method: The pop() method removes (pops) the last element of an array. The pop() method changes the original array  If you call pop() on an empty array, it returns undefined

myArr.pop()
console.log(myArr);  //output will be [ 0, 1, 2, 3, 4, true, 'swapnil'] here 6 is removed from shallow copy 

// 3. The unshift() method :adds new elements to the beginning of an array. The unshift() method overwrites the original array.

myArr.unshift("Garad")
console.log(myArr);   //output will be [ 'Garad', 0, 1, 2, 3, 4, true, 'swapnil' ]

// 4. The shift() method : of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

myArr.shift()
console.log(myArr); // output will be [ 0, 1, 2, 3, 4, true, 'swapnil' ] where 'Garad' is removed

// 5. The includes() method of Array: instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.The includes() method returns true if an array contains a specified value.The includes() method returns false if the value is not found.The includes() method is CASE SENSITIVE.

console.log(myArr.includes("sanjay"));    // output is FALSE
console.log(myArr.includes("swapnil"));   // output is TRUE

console.log(myArr.includes("Swapnil"));   // output is FALSE as it is case sensitive & asked Q. is in Capital 'S'

// 6. The indexOf() method : it returns -1 if the value is not found. The indexOf() method starts at a specified index and searches from left to right.By default the search starts at the first element and ends at the last.Negative start values counts from the last element (but still searches from left to right).

const myArr2 = [0, 1, 2, 3, 4, true, "swapnil"]
console.log(myArr2.indexOf("swapnil"));      // ouput is 6 as index is starting from 0

// 7. The join() method  : returns an array as a string.The join() method does not change the original array.Any separator can be specified. The default is comma (,).

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text);   // output is Banana,Orange,Apple,Mango
console.log(typeof text);  // output is STRING

// by adding separator 'and' :

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let text2 = fruits2.join(" and ");

console.log(text2);   // output is >>> Banana and Orange and Apple and Mango
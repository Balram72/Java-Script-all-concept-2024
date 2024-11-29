// 1. Array Literal – Quick and commonly used way to create arrays.
const myArr = [0, 1, 2, 3, 4, 5, true, "balram"]; // Mixed array
const myArr1 = [0, 1, 2, 3, 5]; // Number array
const myHeroes = ["shaktiman", "naagraj"]; // String array

// 2. Array Constructor – Using new Array(), typically less common.
const myArr2 = new Array(1, 2, 3, 4, 5); // Number array



// JavaScript provides many built-in methods to manage and manipulate arrays. Below are some examples:

// 1. Basic Array Operations
const myNewArray = [0, 1, 2, 3, 5];

// Adds a value to the end of the array
myNewArray.push(6); // [0, 1, 2, 3, 5, 6]

// Removes the last value of the array
myNewArray.pop(); // [0, 1, 2, 3, 5]

// Adds a value to the start of the array
myNewArray.unshift(9); // [9, 0, 1, 2, 3, 5]

// Removes the first value from the array
myNewArray.shift(); // [0, 1, 2, 3, 5]

// Check if array includes a specific value
console.log(myNewArray.includes(5)); // true

// Find the index of a value (returns -1 if not found)
console.log(myNewArray.indexOf(3)); // 3
console.log(myNewArray.indexOf(9)); // -1 (not in array)


// Join Array Elements
// The join() method combines array elements into a string:

let newArray = [1, 2, 3, 4, 5, 6];
const arrayJoin = newArray.join();

console.log(newArray); // [1, 2, 3, 4, 5, 6]
console.log(typeof newArray); // object (arrays are objects in JavaScript)
console.log(arrayJoin); // "1,2,3,4,5,6" (joined string)
console.log(typeof arrayJoin); // string


// Slice – Returns a portion of an array (non-destructive, does not modify original array).

let newArray1 = [0, 1, 2, 3, 4, 5];
const slicedArray = newArray1.slice(1, 3); // [1, 2]
console.log(slicedArray); // Output: [1, 2]
console.log("Original Array:", newArray1); // [0, 1, 2, 3, 4, 5]

// Splice – Removes or replaces elements in an array (destructive, modifies original array).

const splicedArray = newArray1.splice(1, 3); // [1, 2, 3]
console.log("Modified Array:", newArray1); // [0, 4, 5]
console.log(splicedArray); // Output: [1, 2, 3]

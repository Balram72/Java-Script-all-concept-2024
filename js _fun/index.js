// uses jsvu
//  jsvu v2.5.1 — the JavaScript engine Version Updater
const myArr = [];
// %DebugPrint(myArr);

//continious(PACKED) , Holey

// SMI (small Integer)
// Packed element
// Double (float,string,funcation)

const addTwo = [1, 2, 3, 4, 5];
//PACKED_SMI_ELEMENTS -> ONLY USE integer (not use decimal number)
addTwo.push(6.0);
//PACKED_DOUBLE_ELEMENTS
addTwo.push("7");
//PACKED_ELEMENTS

addTwo[10] = 11;
//HOLEY_ELEMENTS

console.log(addTwo); //output->[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(addTwo.length); //output->11
console.log(addTwo[9]); //output->undefined

// bound check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,10)
// hasOwnProperty(Object.prototype,10)

// hole are very expensive in js

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1"); //PACKED_ELEMENTS
arrFive.push("2"); //PACKED_ELEMENTS
arrFive.push("3"); //PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, , 5];

// arrSix.push(NaN); //PACKED_DOUBLE
// arrSix.push(Infinity); //PACKED_DOUBLE

// for ,for-of,forEach

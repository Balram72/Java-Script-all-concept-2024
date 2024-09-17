// Note : JavaScript is a dynamic language and not static.JavaScript is dynamically typed.

//  Primitive  -> (Call by Value)
//  7 types : String, Number, Boolearn, null->(empty), undefined, Symbol, BigInt

const score =100;
const scoreValue =100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;
let userEmail1 = "";
let userEmail2;

let id = Symbol('123');
const anotherId  = Symbol('123');

console.log(id === anotherId); //outPut = flase;

const bigNumber = 3455622767238273827382738272141353254n


// Reference (Non primitive) -> (Call by Value)
// Array, Objects, Functions   
// Non primitive -> datatype -> (funcation)


const heros = ["skatiman","naagraj","doga"];
let myObj = {
    name:"Balram",
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);  // outPut -> bigint
console.log(typeof outsideTemp);  // outPut -> Object
console.log(typeof myFunction); // outPut -> function -> Call the user ->(object Function)
console.log(typeof anotherId);   // outPut -> Symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3
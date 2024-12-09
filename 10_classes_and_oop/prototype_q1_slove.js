// Question 1;
// let myName = "Balram      ";
  // console.log(myName.trim().length);  // output -> 6

//     console.log(myName.truelength())


let anotherUsername = "BalramPanda     ";

String.prototype.trueLength  = function(){
    console.log(`${this}`)
    console.log(`True Length is : ${this.trim().length}`)
}

anotherUsername.trueLength();
"Sunita".trueLength();
"iceTea       ".trueLength();
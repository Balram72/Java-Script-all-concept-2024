



let myHeros  = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.balram = function(){
    console.log(`Balram is present in all Object`);
}

Array.prototype.heyBalram =  function(){
    console.log(`Balram says Hello`);
    
}


// heroPower.balram(); // output -> Balram is present in all Object 
myHeros.balram(); // output -> Balram is present in all Object 
myHeros.heyBalram();
// heroPower.heyBalram();  // Output -> errortype -> heroPower.heyBalram is not a function



//-------------------------------- inheritance --------------------------------------------
    // inheritance  -> __proto__
const User = {
    name :"Balram",
    email:"Bs@gmail.com"
}

const Teacher = {
    mackvideo : true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
 
Teacher.__proto__ = User


// modern Syntax

    Object.setPrototypeOf(TeachingSupport.Teacher)
// immediately Invoked Funcation Expression (IIFE)

  // IIFE -> funcation will be Executed Immediately.
 //       -> pollution of global scope . the problem is many a time ,to remove the pollution of the varibles of gobal scope  whatever declaration is there, we have a remove than use the IIFE 
 // does Not know where to actually stop the contact than use the ;

// (funcation)(); -> iife

(function iife(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// Using the Arrow function
 (()=>{
    // simple IIFE
    console.log(`DB CONNECTED Two`);

 })();


 // Using the Arrow function
 ((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
 })('Balram');



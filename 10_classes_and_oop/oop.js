//--------------------------------  object literal ----------------------------------------
const user = {  
    username: "balram",
    loginCount:8,
    signedIn :true,

    getUserDetails: function(){
        // console.log("Got User details from database")
        // console.log(`Username: ${this.username}`)
        // console.log(this);
    }
 }

//  console.log(user.username);
//  console.log(user.getUserDetails());
//  console.log(this);

//-----------------------------------  Constructor function ------------------------------

// Constructor function  -> new  -> use create a new contact 

    // const peromiseOne = new Promise()
    // const date = new Data()


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting =  function(){
        console.log(`Welcome ${this.username}`);    
    }

    // return this  //->defined the implicity  
}


const userOne  = new User("balram",12,true)
const userTwo  = new User("sunita",11,false)

// console.log(userOne);
console.log(userOne.constructor); // [Function: User]
// console.log(userTwo);


//constructor -> reference in your own funcation

// new -> first create an empty object which is called an instance
    // 1. ->  create new object
    // 2. -> call the constructor function use new keyword
   //           packs all your arguments
   // 3. -> this keyword -> we have also written our argument. all of them get injected
   //              inside this



   // read the 
        // -> instanceof -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
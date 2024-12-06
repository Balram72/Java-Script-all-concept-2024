const promiseOne = new Promise((resolve,reject)=>{
        // Do an async Tack
        //DB calls,cryptography,network
        setTimeout(()=>{
            console.log('Async Tack is Compelete');
            resolve()
        },1000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed")
})

// ------------------------------------ New ----------------------------------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Tack2 is Compelete');
        resolve();
    },1000)
}).then(()=>{
    console.log("Async Tack2 resolvd")
})

// ------------------------------------ New ----------------------------------------------
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Balram",email:"balrampanda727@gmail.com"});
    },1000)
}).then((user)=>{
    console.log(user);
})

const promisefour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Balram",email:"balrampanda727@gmail.com"});
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
})

// ------------------------------------ New ----------------------------------------------

const promiseFive = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Balram",password:"123"})
        }else{
            reject(`Error:Something went Wrong`)
        }
    },1000)
})

promiseFive
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected")
})

// ------------------------------------ New ----------------------------------------------

const promiseSix = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }else{
            reject(`Error:Js went Wrong`)
        }
    },1000)
})

async function consumePromiseSix(){
    try{
        const response =  await promiseSix
        console.log(response)
    }catch(err){
        console.log(err)
    } 
 }

 consumePromiseSix()


 // ------------------------------------ New ----------------------------------------------

    // async function getAllUsers() {
    //     try{
    //         const response  = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json();
    //         console.log(data);
    //     }catch(err){
    //         console.log("E: ",err);
    //     }
    // }
    //getAllUsers();


    fetch('https://api.github.com/users/Balram72')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>console.log(err))
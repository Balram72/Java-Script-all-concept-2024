// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const Descriptor =  Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Descriptor);

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


// const mynewObject  = Object.create(null) // -> Create object

const language = {
    name : 'js language',
    price: 250,
    isAvailable:true,

    paidlag:function(){
        console.log(" Language Not Paid")
    }
}
console.log(Object.getOwnPropertyDescriptor(language)); // output -> undefined
console.log(Object.getOwnPropertyDescriptor(language,"name"));

Object.defineProperty(language,'name',{
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(language,"name"));

for (let [key,value] of Object.entries(language)) {
        if(typeof value !== 'function'){
            console.log(`${key} : ${value}`)
        }
}

// output - >[
//   flase ->  price : 250
//             isAvailable : true
// -------------------------------------
//   true ->   name : js language
//             price : 250
//             isAvailable : true

// ]
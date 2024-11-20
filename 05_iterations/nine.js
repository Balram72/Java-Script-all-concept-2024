const myNums = [1,2,3]

const myTotal =  myNums.reduce(function (acc,currval) {
    console.log(`acc : ${acc}  and Currval: ${currval}`);
    return acc + currval;
},0)
console.log(myTotal)   //output = 6

const myTotals = myNums.reduce ((acc,currval)=>{
    console.log(`acc : ${acc}  and Currval: ${currval}`);
    return acc + currval;
},0)
console.log(myTotals)   //output = 6

const myTotalss = myNums.reduce ((acc,currval)=> acc + currval,0)
console.log(myTotalss)   //output = 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
     {
        itemName: "c course",
        price: 99
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const TotalshoppingCart = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(TotalshoppingCart); // output : 22996;

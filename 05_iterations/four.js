// using the object then use the for in loop            -------------imp


// for of loop :  direct print the value  (print the array value)
    /*
        const arr = [1,2,3,4,5]
         for (const i of arr) {
               console.log(i);   output:- 1,2,3,4,5
        }

    */
//for in loop : direct print the key  (print the index value)
    /* Ex:-
            const programming = ["js","rb","py","java","cpp","c"]
            for (const key in programming) {
                console.log(key)    output:- 0,1,2,3,4,5
            }
    */


const myObject = {
    js:'javaScript',
    cpp:'c++',
    rb:'ruby',
    swift :"swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
}


//maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
   console.log(key)
}
// not work the for in loop  iterations

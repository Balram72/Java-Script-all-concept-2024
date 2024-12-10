//ES6

class User{
    
        constructor(username,email,password){
            this.username = username;
            this.email = email;
            this.password = password
        }

        encryptPassword(){
             return  `${this.password}abc`
        }
        changeUsername(){
            return`${this.username.toUpperCase()}`
        }

}

const loginUser = new User("balram","bs@gmail.com","123");
console.log(loginUser.encryptPassword())
console.log(loginUser.changeUsername())


//behind the scene


    // function User (username,email,password){
    //     this.username = username;
    //     this.email = email;
    //     this.password = password
    // }
    // User.prototype.encryptPassword = function(){
    //       return  `${this.password}abc`
    // }
    // User.prototype.changeUsername = function(){
    //     return`${this.username.toUpperCase()}`
    // }

    // const loginUser1 = new User("sunita","sunita@gmail.com","123");
    // console.log(loginUser1.encryptPassword())
    // console.log(loginUser1.changeUsername())
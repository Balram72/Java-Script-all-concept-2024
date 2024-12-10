class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,emai,password){
       super(username)
        this.emai = emai
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Users = new Teacher("Balram","bal@gmail.com","123")
Users.addCourse();

const newUser = new User("Sunita");
// newUser.addCourse(); -> error

 newUser.logMe();  //output -> A new course was added by Balram
                    //          USERNAME is Sunita

console.log(Users === newUser); // -> output : false
console.log(Users === Teacher); // -> output : false
console.log(Users instanceof Teacher); // -> output : true
console.log(Users instanceof User);   // -> output : true
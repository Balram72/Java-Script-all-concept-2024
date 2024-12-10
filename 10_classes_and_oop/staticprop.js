class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName: ${this.username}`)
    }

    static createId(){
         return `123`
    }
}

const balram = new User("Balram");
// console.log(balram.createId());  -> error use the static


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
// console.log(iphone.createId()); -> error use the static
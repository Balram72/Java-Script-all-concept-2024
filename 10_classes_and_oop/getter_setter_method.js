class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
         this._email = value.toUpperCase();
    }



    get password(){
        return `${this._password}Balram`;
    }
    set password(value){
        this._password = value.toUpperCase();
    }

    
}

const balram = new User ("Bs@gmail.com","ram")
console.log(balram.password);  //-> Output => 123
console.log(balram.email);    //-> Output => BS@GMAIL.COM
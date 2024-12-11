const User = {
    _email : 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
         this._email = value
    },
    
    
    get password(){
        return `${this._password}Balram`;
    },
    set password(value){
        this._password = value;
    }
    
}

const balram  = Object.create(User);
console.log(balram.email)
console.log(balram.password)

function setUsername(username){
    //complex DB calls
    this.username = username; 
    console.log("called");
}
function creatUser(username,email,password){
    setUsername.call(this, username);  // hold the reference

     this.email = email
     this.password = password
}

const user = new creatUser("Balram","bal@gmail.com","123")
console.log(user);
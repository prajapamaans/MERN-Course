function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function setDetails (username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new setDetails("mansi","m@gmail.com",1234)
console.log(chai)
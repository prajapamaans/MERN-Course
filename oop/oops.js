const user = {
    username :"Mansi",
    age : 21,
    logincount : 8,
    signedIn : true,


    getuserdetails : function(){
     console.log("gor user details from database")
    console.log(`username:${this.username}`)
    console.log(this)
    }      
}
console.log(user.username)
// console.log(user.getuserdetails())
console.log(this)

function User(username, logincount, isLoggedIn){
    this.username  = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne = new User("Mansi",12,true)
const userTwo = new User("Javascript",10,true)
console.log(userOne)



function User(email,password){
    this.email = email,
    this.password = password


Object.defineProperty(this,'email',{
    get: function(){
        return this._email.toUpperCase()
    },
    set:function(value){
        this._email = value
       
    }
})

Object.defineProperty(this,'password',{
    get: function(){
        return this._email.toUpperCase()
    },
    set:function(value){
        this._password = value
      
    }
})
}
const user = new User("m@gmail.com","abc")
console.log(user.email)
console.log(user.password)
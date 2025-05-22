class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password

    }

    encryptPassword(){
        return `${this.password}abc`
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}


class Teacher extends User{

    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai = new User("chai","c@gmail.com","123")
console.log(chai.encryptPassword())

const Teah = new Teacher("subject", "s@gmail.com","123")
Teah.addCourse()
Teah.logMe()
const add = new User("python")
add.logMe()
console.log(chai instanceof User)

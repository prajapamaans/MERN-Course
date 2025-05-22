class User{
    constructer(username){
        this.username = username
    }
    logMe(){
        console.log(`Username:${this.username}`)
    }

    static createId(){
        return `123`
    }

}
const mansi = new User("mansi")
// console.log(mansi.createId())

class Teacher extends User{

    constructer(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","iph@gmail.com")
// console.log(iphone.createId())
iphone.logMe();
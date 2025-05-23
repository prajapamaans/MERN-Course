class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password

    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}
    const mansi = new User("mansi","m2gmail.com","mansi123");
    console.log(mansi.email);

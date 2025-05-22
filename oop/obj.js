let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",


getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`)
}
}
Object.prototype.mansi = function(){
    console.log(`mansi is present in all objects`)
}
Array.prototype.heymansi = function(){
    console.log(`Mansi says Hello`)
}


// heroPower.mansi();
myHeros.mansi()
myHeros.heymansi();
// heroPower.heymansi();


const USer = {
    name : "Js Tutorial",
    email : "js@gmail.com"
}

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAsiignment : "js Assignment",
    fullTime : true,
    __proto__ : TeachingSupport 

}
// Teacher.__proto__ : User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let AnotherUsername = "Mansi                "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True Length is ${this.trim().length}`)
}
AnotherUsername.trueLength()
"Priya".trueLength()
"icetea  ".trueLength()



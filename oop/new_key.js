function multiple(num){
    return num*5
}
multiple.power = 2
console.log(multiple(5))
console.log(multiple.power)
console.log(multiple.prototype)

function createUser(username,score){
    this.username = username 
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`the price is ${this.score}`)
}
const chai = new createUser("chai",25)
const tea = createUser("tea",25)

chai.printMe()

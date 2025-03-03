const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedIn = false

// console.log(tinderuser);

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Mansi",
            lastname : "Prajapati"
        }
    }
}

// console.log(regularuser.fullname.userfullname)



const obj = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// obj3 = {...obj,...obj2}
const obj3 = Object.assign({},obj,obj2)
// console.log(obj3);

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('isloggedIn'))

const course = {
    cname : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
const {cname,courseInstructor:instructor,price} = course
console.log(cname,instructor,price)

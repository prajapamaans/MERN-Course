// marks_class[6] = 90
// console.log(marks_class[0])
// console.log(marks_class[1])
// console.log(marks_class[2])
// console.log(marks_class[3])
// console.log(marks_class[4])
// console.log(marks_class[5])
// console.log(marks_class[6])
// console.log(marks_class[7])
// console.log("The length of marks_class is", marks_class.length)
// let marks_class = [23,54,67,87,null]
// marks_class[0] = 34 
// console.log(typeof marks_class)
// const marks = ""
// for (let x of marks_class){
//     marks += x
//     console.log(marks)
// }


let n = [1,4,6,"string",87,56,34]
// console.log(n.toString())
// console.log(n.join("-"))
// console.log(n.pop())
// console.log(n)
// console.log(n.push(8))
// console.log(n.shift())

// For loop
// for(let i = 0;i<n.length;i++){
//     console.log(n[i])
// }
// n.forEach((element) =>{
// console.log(element*element)
// })

// Array from
// let name = "Mansi"
// let arr = Array.from(name)
// console.log(arr)

//for ...of
// for(let i of n){
//     console.log(i)
// }

// // for ...in
// for(let i in n){
//     console.log(i)
// }

//for loop practise
// marks = [23,45,48,89,83]
// for (let i of marks){
//     console.log(i)
// }

// marks = { "harry":98 , "rohan":70 , "aakash": 7}
// for (let key in marks){
//         console.log(`${key} : ${marks[key]}`)}


// console.log("har\"".length)


// let text = "Hello, welcome to JavaScript!";

// console.log(text.includes("welcome")); // true
// console.log(text.includes("Hello"));   // true
// console.log(text.includes("hello"));   // false (case-sensitive)
// console.log(text.includes("Java", 15)); // true (search starts from index 15)
// console.log(text.includes("Python"));  // false


//array
let arr = [76,56,34,98,67]
let arr1 = [26,66,24,58,97]
num3 = [17, 18, 19];
// console.log(arr[4])
arr[4] = 65
// console.log(arr)
//console.log(arr.toString()) // convert into string
// console.log(arr.join(":")) // join with (,)(-)(:)
// console.log(arr.pop()) // update the original array and returns the popped value
// console.log(arr.push(87)) // adds a new element
// console.log(arr)
// console.log(arr.shift()) // removes first element and returns it
// let deleted = delete arr[2];
// console.log(deleted)
// console.log(arr)
// console.log(arr.concat(arr1,num3))
// console.log(arr.sort())
// console.log(numbers.splice(2,0,11,19))
// console.log(numbers)
// const numbers = [1,2,3,4,5,6,8]
// console.log(numbers.slice(2))
// console.log(numbers)
// console.log(arr.reverse())
// numbers.forEach((element) =>{
//     console.log(element*element)
// })
// let  a = arr.map((value)=>{
//     console.log(value)
//     return value +1
// })
// console.log(a)



let arr4 = [2,6,98,54,34]
let a2 = arr4.filter((a)=>{
    return a<8
})
console.log(a2)
let a3 = arr4.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)
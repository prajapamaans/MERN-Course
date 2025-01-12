// Map Method

// let arr = [56,87,34]
// // console.log(arr)

// let a = arr.map((value,index, array) =>{
//     console.log(value,index, array)
//     return value + 1
// })
// console.log(a)

// filter method
// let arr2 = [4,8,7,56]
// let a2 = arr2.filter((a) =>{
//     return a>10
// })
// console.log(a2)

//reduce method
let arr3 = [5,3,7,2,9]
// one way
// let newarr3 = arr3.reduce((h1,h2) =>{
//     return h1 + h2
// })
// console.log(newarr3)

//another way
let newarr = (h1,h2) =>{
    return h1 + h2
}
let a = arr3.reduce(newarr)
console.log(a)
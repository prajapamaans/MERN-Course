// dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toISOString)


// let arr = [1,2,3,4,5]
// arr.unshift(7)
// arr.shift()
// console.log(arr)

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 4); // Extracts elements from index 1 to 3 (4 is excluded)
// console.log(newArr); // Output: [2, 3, 4]
// console.log(arr);    // Output: [1, 2, 3, 4, 5] (Original array remains unchanged)


let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(1, 3, 99, 100); // Removes 3 elements from index 1, inserts 99 and 100
console.log(removed); // Output: [2, 3, 4] (Removed elements)
console.log(arr);     // Output: [1, 99, 100, 5] (Original array is modified)

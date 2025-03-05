let myarr = ["xyz", "abc", "pqr"];
let arr = 0
while (arr <myarr.length) {
//   console.log(myarr.shift());
console.log(`string is ${myarr[arr]} `)
arr = arr + 1
}
for (let i = 0; i < myarr.length; i++) {
    console.log(`string is ${myarr[i]} `)
}


const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(const num of n){
    console.log(num)

}

const greetings = "Hello World!"
for(const greet of greetings){
    if(greet == " "){
        continue;
    }
    console.log(`Each char is ${greet}`)
}

//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map)


for(const [key, value] of map){
    console.log(key, ':-', value)
}

const myobj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for(const [key, value] of myobj){
//     console.log(key, ':-', value)
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(key)
    console.log("for in loop")
}

const coding = ["js", "rb", "py", "java", "cpp"]
coding.forEach((element,index,arr) => {
    console.log(element,index,arr)
    console.log("for each loop")
});

const mycoding = [
    {
    langname: "javascript",
    langfile: "js"
},
{
    langname: "javascript",
    langfilee: "js"
},
{
    langname: "javascript",
    langfilee: "js"
}
]

mycoding.forEach((element) => {
    console.log(element.langname)
});
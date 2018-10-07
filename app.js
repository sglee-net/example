var a = 3
console.log(a)

let arrayLength = 10;
var array = []
for(let i = 0; i < arrayLength; i++) {
    array[i] = i
}

var obj = {
    name: '1',
    array: array,
}

obj.array = obj.array
// .map((v) => {
//     return v + 10
// })
.map( v => v %2 )
// .filter( function(v) {
//     return v%2 == 0
// })
//.filter(v => v%2 == 0)

// function add10(v) {
//     return v + 10
// }

// function isEven(v) {
//     return v % 2 == 0
// }

// obj.array = obj.array
// .map(add10)
// .filter(isEven)


// console.log(obj)
// console.log(obj.name)
console.log(obj.array.toString())

var jsonObj = JSON.stringify(obj)
console.log(jsonObj)

var jsObj = JSON.parse(jsonObj)
console.log(jsObj)


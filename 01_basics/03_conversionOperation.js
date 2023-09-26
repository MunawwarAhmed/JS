let score = "33aaa"

console.log(typeof score)
console.log(typeof(score))

let valueInnumber = Number(score)
console.log(typeof valueInnumber)
console.log(valueInnumber)

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// "Ahmed" => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "Ahmed" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ********************************************** Operations **********************************************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " Ahmed"
console.log(str1 + str2)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log((3 + 4) * 5 % 3);

let gameCounter = 100
gameCounter++
console.log(gameCounter);
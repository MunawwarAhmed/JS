//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0])

// Array methods

myArr.push(6)	// Add new element at last index position
myArr.push(7)
myArr.pop()		// Remove last index element from array

myArr.unshift(9) // Add new element at first index position
myArr.shift()	// Remove element at first index position

console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()		// Array converted into string

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)		// Array typeof is object

// slice, splice

console.log(myArr)

const myn1 = myArr.slice(1, 3)	// Slice not update the array value
console.log(myn1)

const myn2 = myArr.splice(1, 3)		// Splice update the array value
console.log(myn2)
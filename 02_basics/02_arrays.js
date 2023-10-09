const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][1])

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]	// spread operator (we can combine 2 or more array at same time)
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const real_another_array = another_array.flat(infinity)		// Combine multiple nested array into one single array
console.log(real_another_array)

console.log(Array.isArray("Ahmed"))
console.log(Array.from("Ahmed"))	// Create array from string
console.log(Array.from({name: "Ahmed"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))	// Create array from multiple variables and another array
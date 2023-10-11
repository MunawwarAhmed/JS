//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ahmed"
tinderUser.isLoggedIn = false

const log(tinderUser)

const regularUser = {
	email: "some@gmail.com",
	fullname: {
		userfullname: {
			firstname: "Ahmed",
			lastname: "Shaikh"
		}
	}
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}

const obj3 = Object.assign(obj1, obj2)

const obj3 = Object.assign({}, obj1, obj2) // Add empty array for destination

const obj3 = {...obj1, ...obj2} 

console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Object destructure

const course = {
	coursename: "js in hindi",
	price: "999",
	courseInstructor: "Ahmed"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor)

const {courseInstructor: instructor} = course

console.log(instructor)
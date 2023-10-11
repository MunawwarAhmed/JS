// singleton
// Object.create 

// object literals

const mySym = Symbol("key1")	//This is symbol type variable

const JsUser = {
	name: "Ahmed",
	"full name": "Ahmed Shaikh",
	[mySym]: "myKey1",
	age: 30,
	location: "Mumbai",
	email: "ahmed@google.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])	//This Symbol type variable

JsUser.email = "Ahmed@chatgpt.com"

Object.freeze(JsUser)	//This statement freeze the object data user connot update the object value

JsUser.email = "Ahmed@microsoft.com"

console.log(JsUser)

JsUser.greeting = function() {
	console.log("Hello JS user");
}

JsUser.greeting2 = function() {
	console.log(`Hello JS user, ${this.name}`);		//This is string interpulation
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
//Object Literals.
const JsUser = {
    name: "Hitesh",
    age: "18",
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// Using the dot Operator.
// console.log(JsUser.name)
//an alternative way is the square notations:- 
// console.log(JsUser["name"])

const mySym = Symbol("key1")

const obj = {
    //mySum: "myKeyOne"  //wrong method.
    [mySym]: "myKey1"   //right method.
}

// console.log(typeof mySym);

// In Object:
let object = {
    caring:"very much"
}
// Object.freeze(object);
// object.caring = "not so much"
// caring value will not change.
// console.log(object)

// Function like Greeting can be represented as value in object.
object.greeting = function(num){
    num = 34;
    console.log(`hello ${num}`);
}

console.log(object.greeting());
